const MongoClient = require("mongodb").MongoClient;
const config = require("../../config");
const dbConfig = config.client.mongodb;

exports.getAllCategories = async (req, res) => {
  try {
    const client = await MongoClient.connect(dbConfig.url);
    const db = client.db(dbConfig.dbName);
    const col = db.collection("category");
    const docs = await col.find().toArray();
    res.json(docs);
  } catch (err) {
    console.log(err.stack);
    res.send("DB Error");
  }
};
