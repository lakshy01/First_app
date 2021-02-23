const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Bunty:Welcome@123@cluster0.zbh2l.mongodb.net/Users?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, (err) => {
    if (!err) {
        console.log("Mongodb connected");
    } else {
        console.log("Mongodb is not connected");
    }
});

require('./Users');
require('./Admin');