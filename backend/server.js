require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cardRoutes = require('./routes/card');
const deckRoutes = require('./routes/deck');

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
})

// routes
app.use('/api/cards', cardRoutes)
app.use('/api/decks', deckRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`connected to db & listening on port ${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    })