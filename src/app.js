const express = require('express');
const morgan = require('morgan');
const router = require('./Routes/router');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const app = express();

app.use(cors({
  origin: "http://localhost:3000", // front
  credentials: true
}));
app.use(morgan('dev'));



app.use(express.json());
app.use(cookieParser());

app.use(router);



module.exports = app;