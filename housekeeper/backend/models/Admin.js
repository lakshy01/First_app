const mongoose = require('mongoose');
const { Schema } = mongoose;

const AdminSchema = new Schema({
    EmailID: String,
    Password: String,
    AdminID: String,
});

module.exports = mongoose.model('AdminDetail', AdminSchema);