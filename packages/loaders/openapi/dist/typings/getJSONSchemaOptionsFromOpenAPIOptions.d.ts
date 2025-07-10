import type { OpenAPIV2, OpenAPIV3_1 } from 'openapi-types';
import type { Logger, MeshFetch } from '@graphql-mesh/types';
import type { JSONSchemaHTTPJSONOperationConfig, JSONSchemaOperationConfig, JSONSchemaOperationResponseConfig, OperationHeadersConfiguration } from '@omnigraph/json-schema';
import type { SelectQueryOrMutationFieldConfig } from './types.js';
export interface HATEOASConfig {
    /**
     * @default "rel"
     */
    linkNameIdentifier: string;
    /**
     * @default "href"
     */
    linkPathIdentifier: string;
    /**
     * @default "_links"
     */
    linkObjectIdentifier: string;
    /**
     * @default "x-links"
     */
    linkObjectExtensionIdentifier: string;
}
interface GetJSONSchemaOptionsFromOpenAPIOptionsParams {
    source: OpenAPIV3_1.Document | OpenAPIV2.Document | string;
    fallbackFormat?: 'json' | 'yaml' | 'js' | 'ts';
    cwd?: string;
    fetch?: MeshFetch;
    endpoint?: string;
    schemaHeaders?: Record<string, string>;
    operationHeaders?: OperationHeadersConfiguration;
    queryParams?: Record<string, any>;
    selectQueryOrMutationField?: SelectQueryOrMutationFieldConfig[];
    logger?: Logger;
    jsonApi?: boolean;
    HATEOAS?: Partial<HATEOASConfig> | boolean;
}
type FutureLink = (name: string, oasDoc: OpenAPIV3_1.Document | OpenAPIV2.Document, methodObjFieldMap: MethodObjFieldMap) => boolean;
type MethodObjFieldMap = WeakMap<OpenAPIV2.OperationObject | OpenAPIV3_1.OperationObject, JSONSchemaHTTPJSONOperationConfig & {
    responseByStatusCode: Record<string, JSONSchemaOperationResponseConfig>;
}>;
export interface HATEOASContext {
    futureLinks: Set<FutureLink>;
    loadedSchemas: Map<string, {
        oasDoc: OpenAPIV3_1.Document | OpenAPIV2.Document;
        methodObjFieldMap: MethodObjFieldMap;
    }>;
}
export declare const futureLinks: Set<FutureLink>;
export declare function getJSONSchemaOptionsFromOpenAPIOptions(name: string, { source, fallbackFormat, cwd, fetch: fetchFn, endpoint, schemaHeaders, operationHeaders, queryParams, selectQueryOrMutationField, logger, jsonApi, HATEOAS, }: GetJSONSchemaOptionsFromOpenAPIOptionsParams, hateoasContext?: HATEOASContext): Promise<{
    operations: JSONSchemaOperationConfig[];
    endpoint: string;
    cwd: string;
    fetch: MeshFetch;
    schemaHeaders: Record<string, string>;
    operationHeaders: OperationHeadersConfiguration;
}>;
/**
 * Loads multiple OpenAPI schemas with proper HATEOAS cross-reference resolution.
 * This function ensures that schemas referencing operations from other schemas
 * are resolved correctly regardless of loading order.
 */
export declare function getJSONSchemaOptionsFromMultipleOpenAPIOptions(schemas: Array<{
    name: string;
    options: GetJSONSchemaOptionsFromOpenAPIOptionsParams;
}>): Promise<Array<{
    name: string;
    result: Awaited<ReturnType<typeof getJSONSchemaOptionsFromOpenAPIOptions>>;
}>>;
export {};
