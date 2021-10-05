const mongo = require("mongoose");
const postSchema = new mongo.Schema({
  farmerId: String,
  cropType: String,
  title: String,
  price: String,
  city: String,
  des: String,
  url: String,
});
module.exports = mongo.model("postData", postSchema);
