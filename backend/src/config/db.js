const mongoose = require("mongoose");
async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/kitabcycle");
        console.log("mongoDB connected successfully");
    } catch (error) {
         console.log("MongoDB connection failed : ",error.message);
    }
}
module.exports = connectDB;