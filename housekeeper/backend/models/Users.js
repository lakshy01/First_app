const mongoose = require('mongoose');
const { Schema } = mongoose;

const User_Detail_Schema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    regNo: {
        type: String
    },
    roomNo: {
        type: String
    },
    floorNo: {
        type: String
    },
    timeRegistration: {
        type: String
    },
    isCompleted: {
        type: Boolean
    },
    isFinish: {
        type: Boolean
    },
    time_slots: {
        type: String
    }
});

module.exports = mongoose.model('UserDetail', User_Detail_Schema);