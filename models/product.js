const mongoose = require("./index");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  featured: {
    type: Boolean,
    default: true,
  },
  rating: {
    type: Number,
    default: 4.9,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["apple", "sumsung", "iphone", "dell"],
      message: `{VALUE}  is not supported`,
    },
  },
});

const Data = mongoose.model("Product", productSchema);
module.exports = Data;
