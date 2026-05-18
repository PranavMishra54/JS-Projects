const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');   

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

// Connect to MongoDB
main()
    .then(()=> {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatapp');
}

app.get(('/chats'), async (req, res) => {
    try {
        const chats = await Chat.find({});      
        res.render('index.ejs', { chats });
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/', (req, res) => {
    res.send('Home page of Chat App');
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});