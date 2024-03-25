require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});