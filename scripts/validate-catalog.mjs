import fs from "node:fs";
const catalog = JSON.parse(fs.readFileSync(new URL("../catalog/integrations.json", import.meta.url), "utf8"));
if (catalog.version !== "ai2human-integrations/v1") throw new Error("Unsupported catalog version");
const slugs = new Set();
for (const item of catalog.integrations) {
  for (const key of ["slug", "name", "language", "maturity", "capabilities"]) if (!item[key]) throw new Error(`${item.slug || "unknown"}: missing ${key}`);
  if (slugs.has(item.slug)) throw new Error(`Duplicate slug: ${item.slug}`);
  slugs.add(item.slug);
}
console.log(`Validated ${slugs.size} integrations.`);
