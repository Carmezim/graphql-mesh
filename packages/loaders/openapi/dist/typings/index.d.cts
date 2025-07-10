import type { Logger, MeshFetch } from '@graphql-mesh/types';
import type { OpenAPILoaderOptions } from './types.cjs';
export { loadGraphQLSchemaFromOpenAPI as default } from './loadGraphQLSchemaFromOpenAPI.cjs';
export * from './loadGraphQLSchemaFromOpenAPI.cjs';
export { getJSONSchemaOptionsFromOpenAPIOptions } from './getJSONSchemaOptionsFromOpenAPIOptions.cjs';
export type { OpenAPILoaderOptions } from './types.cjs';
export declare function loadOpenAPISubgraph(name: string, options: OpenAPILoaderOptions): (ctx: {
    fetch: MeshFetch;
    cwd: string;
    logger: Logger;
}) => {
    name: string;
    schema$: Promise<import("graphql").GraphQLSchema>;
};
export { processDirectives, getSubgraphExecutor } from '@omnigraph/json-schema';
