export default defineNitroPlugin(async (nitroApp) => {
  const db = getAppDatabase();

  db.info()
    .then((info) => {
      console.log("pouchdb info:", info);

      console.log("pouchdb created successfully");
    })
    .catch((err) => {
      console.error("pouchdb info error:", err);
    });
});
