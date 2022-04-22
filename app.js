const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

// required libs : mongoose | colors
// run the following command
// npm i mongoose colors

const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017", () => {
    title: { type: string, require = true };
    des: { type: string, require = true };
    date: { type: date };


});


app.listen(PORT, () => {
    console.log('run');
})