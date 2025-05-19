export default defineEventHandler(async (event) => {
  const db = getAppDatabase();

  /*db.post({
    type: "user",
    name: "David Smith",
    age: 28,
  })
    .then((res) => console.log("insert user success", res))
    .catch((err) => console.log("insert user error:", err));

  db.post({
    type: "order",
    product: "mobilephone",
    price: 2999,
  })
    .then((res) => console.log("insert order success", res))
    .catch((err) => console.log("insert order error:", err));*/

  return db.allDocs({ include_docs: true });
});
