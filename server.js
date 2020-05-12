const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
require("dotenv").config();

//import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

//app
const app = express();

//connect to mongodb
mongoose
    .connect(process.env.mongoDB_ATLAS_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log("MongoDB database connection established successfully...")
    )
    .catch((err) => console.log(err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

    // routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);

//routes
app.get("/", (req, res) => {
    res.send("hello from node.js");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});