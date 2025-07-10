"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubgraphExecutor = exports.processDirectives = exports.getJSONSchemaOptionsFromOpenAPIOptions = exports.default = void 0;
exports.loadOpenAPISubgraph = loadOpenAPISubgraph;
const tslib_1 = require("tslib");
const loadGraphQLSchemaFromOpenAPI_js_1 = require("./loadGraphQLSchemaFromOpenAPI.js");
var loadGraphQLSchemaFromOpenAPI_js_2 = require("./loadGraphQLSchemaFromOpenAPI.js");
Object.defineProperty(exports, "default", { enumerable: true, get: function () { return loadGraphQLSchemaFromOpenAPI_js_2.loadGraphQLSchemaFromOpenAPI; } });
tslib_1.__exportStar(require("./loadGraphQLSchemaFromOpenAPI.js"), exports);
var getJSONSchemaOptionsFromOpenAPIOptions_js_1 = require("./getJSONSchemaOptionsFromOpenAPIOptions.js");
Object.defineProperty(exports, "getJSONSchemaOptionsFromOpenAPIOptions", { enumerable: true, get: function () { return getJSONSchemaOptionsFromOpenAPIOptions_js_1.getJSONSchemaOptionsFromOpenAPIOptions; } });
function loadOpenAPISubgraph(name, options) {
    return (ctx) => ({
        name,
        schema$: (0, loadGraphQLSchemaFromOpenAPI_js_1.loadNonExecutableGraphQLSchemaFromOpenAPI)(name, {
            ...options,
            fetch: ctx.fetch,
            cwd: ctx.cwd,
            logger: ctx.logger,
        }),
    });
}
var json_schema_1 = require("@omnigraph/json-schema");
Object.defineProperty(exports, "processDirectives", { enumerable: true, get: function () { return json_schema_1.processDirectives; } });
Object.defineProperty(exports, "getSubgraphExecutor", { enumerable: true, get: function () { return json_schema_1.getSubgraphExecutor; } });
