const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/shop", {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("database connected successfully"))
  .catch((err)=>console.log(err.message))
