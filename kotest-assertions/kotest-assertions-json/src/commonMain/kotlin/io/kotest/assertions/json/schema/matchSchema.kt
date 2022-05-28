package io.kotest.assertions.json.schema

import io.kotest.assertions.json.JsonNode
import io.kotest.assertions.json.JsonTree
import io.kotest.assertions.json.toJsonTree
import io.kotest.common.ExperimentalKotest
import io.kotest.matchers.Matcher
import io.kotest.matchers.MatcherResult
import io.kotest.matchers.and
import io.kotest.matchers.should
import io.kotest.matchers.shouldNot
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonElement

@ExperimentalKotest
infix fun String?.shouldMatchSchema(schema: JsonSchema) =
   this should parseToJson.and(matchSchema(schema).contramap<String?> { it?.let(Json::parseToJsonElement) })

@ExperimentalKotest
infix fun String?.shouldNotMatchSchema(schema: JsonSchema) =
   this shouldNot parseToJson.and(matchSchema(schema).contramap<String?> { it?.let(Json::parseToJsonElement) })

@ExperimentalKotest
infix fun JsonElement.shouldMatchSchema(schema: JsonSchema) = this should matchSchema(schema)
@ExperimentalKotest
infix fun JsonElement.shouldNotMatchSchema(schema: JsonSchema) = this shouldNot matchSchema(schema)

val parseToJson = object : Matcher<String?> {
   override fun test(value: String?): MatcherResult {
      if (value == null) return MatcherResult(
         false,
         { "expected null to match schema: " },
         { "expected not to match schema, but null matched JsonNull schema" }
      )

      val parsed = runCatching {
         Json.parseToJsonElement(value)
      }

      return MatcherResult(
         parsed.isSuccess,
         { "Failed to parse actual as JSON: ${parsed.exceptionOrNull()?.message}" },
         { "Failed to parse actual as JSON: ${parsed.exceptionOrNull()?.message}" },
      )
   }
}

@ExperimentalKotest
fun matchSchema(schema: JsonSchema) = object : Matcher<JsonElement?> {
   override fun test(value: JsonElement?): MatcherResult {
      if (value == null) return MatcherResult(
         false,
         { "expected null to match schema: " },
         { "expected not to match schema, but null matched JsonNull schema" }
      )

      val tree = toJsonTree(value)
      val violations = validate("$", tree.root, schema.root)

      return MatcherResult(
         violations.isEmpty(),
         { violations.joinToString(separator = "\n") { "${it.path} => ${it.message}" } },
         { "Expected some violation against JSON schema, but everything matched" }
      )
   }
}

@ExperimentalKotest
private fun validate(
   currentPath: String,
   tree: JsonNode,
   expected: JsonSchemaElement,
): List<SchemaViolation> {
   fun propertyViolation(propertyName: String, message: String) =
      listOf(SchemaViolation("$currentPath.$propertyName", message))

   fun violation(message: String) =
      listOf(SchemaViolation(currentPath, message))

   return when (tree) {
      is JsonNode.ArrayNode -> {
         if (expected is JsonSchema.JsonArray)
            tree.elements.flatMapIndexed { i, node ->
               validate("$currentPath[$i]", node, expected.elementType)
            }
         else violation("Expected ${expected.typeName()}, but was array")
      }
      is JsonNode.ObjectNode -> {
         if (expected is JsonSchema.JsonObject) {
            val extraKeyViolations =
               if (!expected.additionalProperties)
                  tree.elements.keys
                     .filterNot { it in expected.properties.keys }
                     .flatMap {
                        propertyViolation(it, "Key undefined in schema, and schema is set to disallow extra keys")
                     }
               else emptyList()

            extraKeyViolations + expected.properties.flatMap { (propertyName, schema) ->
               val actual = tree.elements[propertyName]

               if (actual == null) {
                  if (expected.requiredProperties.contains(propertyName)) {
                     propertyViolation(propertyName, "Expected ${schema.typeName()}, but was undefined")
                  } else {
                     emptyList()
                  }
               } else validate("$currentPath.$propertyName", actual, schema)
            }
         } else violation("Expected ${expected.typeName()}, but was object")
      }

      is JsonNode.NullNode -> TODO("Check how Json schema handles null")

      is JsonNode.NumberNode ->
         when (expected) {
            is JsonSchema.JsonInteger -> {
               if (tree.content.contains(".")) violation("Expected integer, but was number")
               else expected.matcher?.let {
                  val matcherResult = it.test(tree.content.toLong())
                  if (matcherResult.passed()) emptyList() else violation(matcherResult.failureMessage())
               } ?: emptyList()
            }

            is JsonSchema.JsonDecimal -> {
               expected.matcher?.let {
                  val matcherResult = it.test(tree.content.toDouble())
                  if (matcherResult.passed()) emptyList() else violation(matcherResult.failureMessage())
               } ?: emptyList()
            }

            else -> violation("Expected ${expected.typeName()}, but was ${tree.type()}")
         }

      is JsonNode.StringNode ->
         if (expected is JsonSchema.JsonString) {
            expected.matcher?.let {
               val matcherResult = it.test(tree.value)
               if (matcherResult.passed()) emptyList() else violation(matcherResult.failureMessage())
            } ?: emptyList()
         } else violation("Expected ${expected.typeName()}, but was ${tree.type()}")
      is JsonNode.BooleanNode ->
         if (!isCompatible(tree, expected))
            violation("Expected ${expected.typeName()}, but was ${tree.type()}")
         else emptyList()
   }
}

private class SchemaViolation(
   val path: String,
   message: String,
   cause: Throwable? = null
) : RuntimeException(message, cause)

private fun isCompatible(actual: JsonNode, schema: JsonSchemaElement) =
   (actual is JsonNode.BooleanNode && schema is JsonSchema.JsonBoolean) ||
      (actual is JsonNode.StringNode && schema is JsonSchema.JsonString) ||
      (actual is JsonNode.NumberNode && schema is JsonSchema.JsonNumber)
