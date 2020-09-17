const express = require("express")
const routes = require("./routes")
const app = express()
const port = process.env.PORT || 3333

require('dotenv').config()

app.use(express.json());

require('./database');

app.use(routes);


app.listen(port);
