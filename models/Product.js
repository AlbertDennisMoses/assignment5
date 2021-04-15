const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  quantity: {
    type: Number,
    default: 0,
  },
},
{
timestamps:true
});

module.exports = model("Product",productSchema)