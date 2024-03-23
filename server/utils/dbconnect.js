const mongoose = require("mongoose");

async function connect() {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/auth")
    .then(() => {
      console.log("MongoDB Connected . . .");
    })
    .catch((err) => {
      console.log("Catch ERROR : ", err);
    });
}

module.exports.connect = connect;
