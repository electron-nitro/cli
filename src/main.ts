import { defineCommand } from "citty";

import electronNitroPkg from "../package.json" assert { type: "json" };
import { commands } from "./commands";

export const main = defineCommand({
  meta: {
    name: electronNitroPkg.name,
    version: electronNitroPkg.version,
    description: electronNitroPkg.description,
  },
  subCommands: commands,
}) as any;
