import { loadNonExecutableGraphQLSchemaFromOpenAPI } from './loadGraphQLSchemaFromOpenAPI.js';
export { loadGraphQLSchemaFromOpenAPI as default } from './loadGraphQLSchemaFromOpenAPI.js';
export * from './loadGraphQLSchemaFromOpenAPI.js';
export { getJSONSchemaOptionsFromOpenAPIOptions } from './getJSONSchemaOptionsFromOpenAPIOptions.js';
export function loadOpenAPISubgraph(name, options) {
    return (ctx) => ({
        name,
        schema$: loadNonExecutableGraphQLSchemaFromOpenAPI(name, {
            ...options,
            fetch: ctx.fetch,
            cwd: ctx.cwd,
            logger: ctx.logger,
        }),
    });
}
export { processDirectives, getSubgraphExecutor } from '@omnigraph/json-schema';
