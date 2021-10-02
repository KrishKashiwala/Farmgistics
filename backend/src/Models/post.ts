const mongo = require("mongoose");
const postSchema = new mongo.Schema({
  farmerId: String,
  title: String,
  price: String,
  city: String,
  des: String,
  img: String,
});
module.exports = mongo.model("postData", postSchema);
