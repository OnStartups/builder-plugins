import { z } from "zod";
import type { FunctionProperty, PublicFunction } from "./types";

function enumToZod(values: Array<string | number | boolean>): z.ZodType {
  if (values.every((v) => typeof v === "string")) {
    return z.enum(values as [string, ...string[]]);
  }
  const literals = values.map((v) => z.literal(v));
  const [first, ...rest] = literals;
  if (rest.length === 0) return first as z.ZodType;
  return z.union([first, ...rest] as unknown as [z.ZodType, z.ZodType, ...z.ZodType[]]);
}

function propertyToZod(prop: FunctionProperty): z.ZodType {
  let base: z.ZodType;
  if (prop.enum && prop.enum.length > 0) {
    base = enumToZod(prop.enum);
  } else if (prop.type === "integer") {
    base = z.number().int();
  } else if (prop.type === "number") {
    base = z.number();
  } else if (prop.type === "boolean") {
    base = z.boolean();
  } else if (prop.type === "array") {
    base = z.array(prop.items ? propertyToZod(prop.items) : z.unknown());
  } else if (prop.type === "object") {
    base = z.record(z.string(), z.unknown());
  } else {
    base = z.string();
  }
  if (prop.description) base = base.describe(prop.description);
  return base;
}

export function toZodShape(fn: PublicFunction): z.ZodRawShape {
  const shape: Record<string, z.ZodType> = {};
  const properties = fn.parameters?.properties ?? {};
  const required = new Set(fn.parameters?.required ?? []);
  for (const [key, prop] of Object.entries(properties)) {
    const schema = propertyToZod(prop);
    const optional = key === "output_variable_name" || !required.has(key);
    shape[key] = optional ? schema.optional() : schema;
  }
  return shape;
}
