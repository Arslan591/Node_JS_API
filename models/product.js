// const mongoose = require("./index");

// const productSchema = mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   price: {
//     type: Number,
//     required: true,
//   },
//   featured: {
//     type: Boolean,
//     default: true,
//   },
//   rating: {
//     type: Number,
//     default: 4.9,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
//   company: {
//     type: String,
//     enum: {
//       values: ["apple", "sumsung", "iphone", "dell"],
//       message: `{VALUE}  is not supported`,
//     },
//   },
// });

// const Data = mongoose.model("Product", productSchema);
// module.exports = Data;

const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejsApi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
sequelize.authenticate().then(() => {
  console.log("Hello");
});

const Data = sequelize.define(
  "products",
  {
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
      // enum: {
      //   values: ["apple", "sumsung", "iphone", "dell"],
      //   message: `{VALUE}  is not supported`,
      // },
    },
  }
  // [("require", "dependency")],
  // function (require, factory) {
  //   "use strict";
  // }
);

module.exports = Data;
