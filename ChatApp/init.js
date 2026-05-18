const mongoose = require('mongoose');
const Chat = require('./models/chat');

main()
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

let allChats = [
    {
        from: 'Alice',
        to: 'Bob',
        message: 'Hello, Bob!',     
        createdAt: new Date()
    },
    {   
        from: 'Bob',
        to: 'Alice',
        message: 'Hi, Alice!',
        createdAt: new Date()
    },
    {
        from: 'Peter',
        to: 'Tony',
        message: 'Hey, Tony! How are you?',
        createdAt: new Date()
    },
    {
        from: 'Modi',
        to: 'Trump',
        message: 'Hey, Trump! How was Epstein Island?',
        createdAt: new Date()
    },
    {
        from:'Modi',
        to:'Putin',
        message:'Hey, Putin! Can you give me the mig-70?',
        createdAt: new Date()
    }
]


Chat.insertMany(allChats)
    .then((res) => {
        console.log('Chat messages inserted successfully', res);
    })
    .catch((err) => {
        console.log(err);
    }); 