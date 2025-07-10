import type { Logger, MeshFetch } from '@graphql-mesh/types';
import type { OpenAPILoaderOptions } from './types.js';
export { loadGraphQLSchemaFromOpenAPI as default } from './loadGraphQLSchemaFromOpenAPI.js';
export * from './loadGraphQLSchemaFromOpenAPI.js';
export { getJSONSchemaOptionsFromOpenAPIOptions } from './getJSONSchemaOptionsFromOpenAPIOptions.js';
export type { OpenAPILoaderOptions } from './types.js';
export declare function loadOpenAPISubgraph(name: string, options: OpenAPILoaderOptions): (ctx: {
    fetch: MeshFetch;
    cwd: string;
    logger: Logger;
}) => {
    name: string;
    schema$: Promise<import("graphql").GraphQLSchema>;
};
export { processDirectives, getSubgraphExecutor } from '@omnigraph/json-schema';
