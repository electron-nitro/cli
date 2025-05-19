import path from "node:path";
import fs from "node:fs";
import envPaths from "env-paths";

const appPaths = envPaths(packageInfo.productName, { suffix: "" });

export const getAppDataPath = () => appPaths.data;

export function getAbsoluteDirectoryPath(relativeDirPath: string) {
  const absoluteDirPath = path.join(getAppDataPath(), relativeDirPath);

  if (!fs.existsSync(absoluteDirPath)) {
    fs.mkdirSync(absoluteDirPath, { recursive: true });
  }
  return absoluteDirPath;
}
