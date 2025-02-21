import { defineCommand } from "citty";
import { resolve } from "pathe";
import {
  getArgs as getListhenArgs,
  parseArgs as parseListhenArgs,
} from "listhen/cli";
import { createElectronNitro, build } from "@electron-nitro/core";

import { cwdArgs } from "./_shared";

export default defineCommand({
  meta: {
    name: "dev",
    description: "Start the development server",
  },
  args: {
    ...cwdArgs,
    ...getListhenArgs(),
  },
  async run(ctx) {
    const rootDir = resolve(ctx.args.cwd || ".");
    const listhenOptions = parseListhenArgs(ctx.args);

    const electronNitro = await createElectronNitro(
      {
        dev: true,
        rootDir,
      },
      listhenOptions
    );

    await build(electronNitro);
  },
});
