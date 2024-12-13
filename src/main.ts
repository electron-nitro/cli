import { defineCommand, runMain } from "citty";

import electronNitroPkg from "../package.json" assert { type: "json" };
import { commands } from "./commands";

const main = defineCommand({
  meta: {
    name: electronNitroPkg.name,
    version: electronNitroPkg.version,
    description: electronNitroPkg.description,
  },
  subCommands: commands,
});

runMain(main);
