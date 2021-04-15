const { json } = require("express");
const express = require("express");


const app = express();
app.use(express.json())

require("./config/dbConnect")

app.use("/products", require("./route/productRoute"));

app.listen(4000, console.log("Server is up and running"));
