import { defineCommand } from "citty";
import { createElectronNitro, build } from "@electron-nitro/core";

export default defineCommand({
  meta: {
    name: "build",
    description: "Build electron-nitro project for production",
  },
  args: {
    preset: {
      type: "string",
      description:
        "The build preset to use (you can also use `NITRO_PRESET` environment variable).",
    },
  },
  async run(ctx) {
    const electronNitro = await createElectronNitro({
      dev: false,
      nitro: {
        preset: ctx.args.preset,
      },
    });

    await build(electronNitro);
    
    await electronNitro.close();
  },
});
