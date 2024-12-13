import { defineCommand } from "citty";
import { consola } from "consola";
import { resolve } from "pathe";
import { downloadTemplate } from "giget";
import type { DownloadTemplateResult } from "giget";

import { sharedArgs } from "./_shared";

const DEFAULT_TEMPLATE_NAME = "nitro-basic";

const DEFAULT_REGISTRY =
  "https://raw.githubusercontent.com/nuxt/starter/templates/templates";

export default defineCommand({
  meta: {
    name: "init",
    description: "Initialize a fresh project",
  },
  args: {
    ...sharedArgs,
    dir: {
      type: "positional",
      description: "Project directory",
      default: "",
    },
    template: {
      type: "string",
      alias: "t",
      description: "Template name",
    },
  },
  async run(ctx) {
    const cwd = resolve(ctx.args.cwd || ".");

    // Get template name
    const templateName = ctx.args.template || DEFAULT_TEMPLATE_NAME;

    if (typeof templateName !== "string") {
      consola.error("Please specify a template!");
      process.exit(1);
    }

    // Download template
    let template: DownloadTemplateResult;

    try {
      template = await downloadTemplate(templateName, {
        dir: ctx.args.dir,
        cwd,
        force: true,
        offline: false,
        preferOffline: true,
        registry: process.env.ZTX_ELECTRON_INIT_REGISTRY || DEFAULT_REGISTRY,
      });
    } catch (err) {
      if (process.env.DEBUG) {
        throw err;
      }
      consola.error((err as Error).toString());
      process.exit(1);
    }

    consola.log(
      `\n✨ electron app project has been created with the \`${template.name}\` template. `
    );
  },
});
