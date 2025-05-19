import packageJson from "~~/package.json";

export const packageInfo = {
  name: packageJson.name,
  productName: packageJson.productName ?? packageJson.name,
  description: packageJson.description,
  version: packageJson.version,
};
