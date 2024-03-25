const express = require('express');
const cardRoutes = require('./routes/cardRoutes');
const deckRoutes = require('./routes/deckRoutes');

const app = express();
app.use(express.json());
app.use('/api/cards', cardRoutes);
app.use('/api/decks', deckRoutes);

module.exports = app;
