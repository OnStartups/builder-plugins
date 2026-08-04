export interface CatalogEntry {
  category: string;
  inputs: string[];
  label: string;
}

export type ActionCatalog = Record<string, CatalogEntry>;

export interface FunctionProperty {
  type?: string;
  name?: string;
  description?: string;
  enum?: Array<string | number | boolean>;
  default?: unknown;
  items?: FunctionProperty;
  properties?: Record<string, FunctionProperty>;
  required?: string[];
}

export interface PublicFunction {
  name: string;
  description?: string;
  parameters?: {
    type?: string;
    properties?: Record<string, FunctionProperty>;
    required?: string[];
  };
}
