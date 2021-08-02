const mon = require('mongoose');

const authorSchema = new mon.Schema({
    name: {
        type: String
    },
    phone: {
        type: String
    },
    city: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    post: [
        {
            farmerId: String,
            title: String,
            des: String
        }
    ]
});
module.exports = mon.model('farmerdata', authorSchema);
