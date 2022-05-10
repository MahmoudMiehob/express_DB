const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = 5000;
require("dotenv/config");

// IMPORT ROUTES
const userRoute = require("./Routes/user");
// MIDDLEWARE
app.use(cors())
app.use(bodyParser.json());
app.use("/user", userRoute);
// ROUTES
app.get("/", (req, res) => {
    res.send("app.js file !!!");
});

// CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to DB");
});
// LISTEN TO PORT 3000
app.listen(PORT, () => {
    console.log(`server run on http://localhost:${PORT}`);
});