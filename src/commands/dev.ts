import { defineCommand } from "citty";
import {
  getArgs as getListhenArgs,
  parseArgs as parseListhenArgs,
} from "listhen/cli";
import { createElectronNitro, build } from "@electron-nitro/core";

export default defineCommand({
  meta: {
    name: "dev",
    description: "Start the development server",
  },
  args: {
    ...getListhenArgs(),
  },
  async run(ctx) {
    const listhenOptions = parseListhenArgs(ctx.args);

    const electronNitro = await createElectronNitro(
      { dev: true },
      listhenOptions
    );

    await build(electronNitro);
  },
});
