import { defineCommand } from "citty";
import { resolve } from "pathe";
import { createElectronNitro, build } from "@electron-nitro/core";

import { cwdArgs } from "./_shared";

export default defineCommand({
  meta: {
    name: "build",
    description: "Build electron-nitro project for production",
  },
  args: {
    ...cwdArgs,
    preset: {
      type: "string",
      description:
        "The build preset to use (you can also use `NITRO_PRESET` environment variable).",
    },
  },
  async run(ctx) {
    const rootDir = resolve(ctx.args.cwd || ".");

    const electronNitro = await createElectronNitro({
      dev: false,
      rootDir,
      nitro: {
        preset: ctx.args.preset,
      },
    });

    await build(electronNitro);

    await electronNitro.close();
  },
});
