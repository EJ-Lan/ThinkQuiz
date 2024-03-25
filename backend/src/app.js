const express = require('express');
const cardRoutes = require('./routes/card');
const deckRoutes = require('./routes/deck');

const app = express();
app.use(express.json());
app.use('/api/cards', cardRoutes);
app.use('/api/decks', deckRoutes);

module.exports = app;
