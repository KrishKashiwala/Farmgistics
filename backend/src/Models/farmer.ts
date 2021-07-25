const mon = require('mongoose');
const authorSchema = new mon.Schema({
    name: {
        type: String
    },
    phone: {
        type: Number
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
    }
});
module.exports = mon.model('farmerdata', authorSchema);
