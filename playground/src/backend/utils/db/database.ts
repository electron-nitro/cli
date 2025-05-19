import PouchDB from "pouchdb-node";
import findPlugin from "pouchdb-find";

PouchDB.plugin(findPlugin);

const instances: Record<string, PouchDB.Database> = Object.create(null);

export function getAppDatabase(name = "default") {
  if (instances[name]) {
    return instances[name];
  }

  const dbDirPath = getAbsoluteDirectoryPath(`${name}db`);

  return (instances[name] = new PouchDB(dbDirPath));
}
