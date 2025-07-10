"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDirectives = void 0;
exports.loadGraphQLSchemaFromOpenAPI = loadGraphQLSchemaFromOpenAPI;
exports.loadNonExecutableGraphQLSchemaFromOpenAPI = loadNonExecutableGraphQLSchemaFromOpenAPI;
const json_schema_1 = require("@omnigraph/json-schema");
const getJSONSchemaOptionsFromOpenAPIOptions_js_1 = require("./getJSONSchemaOptionsFromOpenAPIOptions.js");
/**
 * Creates a local GraphQLSchema instance from a OpenAPI Document.
 * Everytime this function is called, the OpenAPI file and its dependencies will be resolved on runtime.
 * If you want to avoid this, use `createBundle` function to create a bundle once and save it to a storage
 * then load it with `loadGraphQLSchemaFromBundle`.
 */
async function loadGraphQLSchemaFromOpenAPI(name, options) {
    const extraJSONSchemaOptions = await (0, getJSONSchemaOptionsFromOpenAPIOptions_js_1.getJSONSchemaOptionsFromOpenAPIOptions)(name, options);
    return (0, json_schema_1.loadGraphQLSchemaFromJSONSchemas)(name, {
        ...options,
        ...extraJSONSchemaOptions,
    });
}
async function loadNonExecutableGraphQLSchemaFromOpenAPI(name, options) {
    const extraJSONSchemaOptions = await (0, getJSONSchemaOptionsFromOpenAPIOptions_js_1.getJSONSchemaOptionsFromOpenAPIOptions)(name, options);
    return (0, json_schema_1.loadNonExecutableGraphQLSchemaFromJSONSchemas)(name, {
        ...options,
        ...extraJSONSchemaOptions,
    });
}
var json_schema_2 = require("@omnigraph/json-schema");
Object.defineProperty(exports, "processDirectives", { enumerable: true, get: function () { return json_schema_2.processDirectives; } });
