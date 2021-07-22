const mon = require('mongoose');
const authorSchema = new mon.Schema({
    name: {
        type: String
    }
});
module.exports = mon.model('farmerdata', authorSchema);
