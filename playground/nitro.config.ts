//https://nitro.unjs.io/config
export default defineNitroConfig({  
  experimental: {
    openAPI: true,
    asyncContext: true,
  },
  openAPI: {
    production: "runtime",
    meta: {
      title: "electron-nitro-playground",
      description: "electron nitro playground backend api",
      version: "1.0",
    },
  },
  compatibilityDate: "2024-08-27",
});
