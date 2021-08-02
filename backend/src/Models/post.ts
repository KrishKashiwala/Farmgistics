const mongo = require('mongoose');
const postSchema = new mongo.Schema({
    farmerId: String,
    title: String,
    des: String
});
module.exports = mongo.model('postData', postSchema);
