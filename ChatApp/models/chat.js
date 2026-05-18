const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to:{
        type: String,
        required: true      
    },
    message: {
        type: String,
        maxLenght: 500,
    },
    createdAt: {
        type: Date,
        required: true,
    }
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;