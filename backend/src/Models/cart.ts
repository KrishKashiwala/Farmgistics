const mong = require("mongoose");
const cartSchema = new mong.Schema({
	name: String,
	title: String,
	rate: String,
	city: String,
	description: String,
	photo: String,
	farmerName: String
});
module.exports = mong.model("cartData", cartSchema);
