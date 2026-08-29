import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const outputDir = resolve("dist");
const indexPath = resolve(outputDir, "index.html");

if (!existsSync(indexPath)) {
  throw new Error(`Brak statycznego pliku: ${indexPath}`);
}

copyFileSync(indexPath, resolve(outputDir, "404.html"));
writeFileSync(resolve(outputDir, ".nojekyll"), "");
