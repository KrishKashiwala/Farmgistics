const mongo = require('mongoose');
const postSchema = new mongo.Schema({
    body: String,
    name: String,
    createdAt: String,
    comments: [
        {
            body: String,
            username: String,
            createdAt: String
        }
    ],
    likes: [
        {
            username: String,
            createdAt: String
        }
    ],
    user: {
        type: mongo.Schema.Types.ObjectId,
        ref: 'users'
    }
});
module.exports = mongo.model('postData', postSchema);
