const express = require("express");
const path = require("path");
const $ = require("jquery");
const cookieParser = require('cookie-parser');
const routes = require("./routes/route.js");

const app = express();
// connect DB
const connect = require('./DBConnect/connect');
connect.connect();

app.use(cookieParser());
// view engine setup
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// set path jquery
app.use("/jquery", express.static(path.join(__dirname + "/node_modules/jquery/dist/")));
//set static folder(public) path
app.use(express.static(path.join(__dirname + "/public")));

// default page load
routes(app);

//assign port
const port = process.env.PORT || 3005;
app.listen(port, () => console.log("server run port " + port));