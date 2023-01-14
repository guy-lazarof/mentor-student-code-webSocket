const { MongoClient } = require("mongodb");
const uri = process.env.URI;
module.exports = {
  client: new MongoClient(uri)
}
