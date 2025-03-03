import { defineElectronNitroConfig } from "@electron-nitro/core/configurer";

export default defineElectronNitroConfig({
  hooks: {
    "nitro:init": (nitro) => {
      console.log("nitro options entry:", nitro.options.entry);
    },
    "nitro:dev:listen": async (nitro, listener) => {
      const listenUrls = await listener.getURLs();

      console.log(
        "nitro dev server listening on:",
        listenUrls.map((x) => `${x.type}: ${x.url}`).join(", ")
      );
    },
  },
});
