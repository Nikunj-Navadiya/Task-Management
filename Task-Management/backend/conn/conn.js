const mongoose = require("mongoose");
require("dotenv").config(); // Load .env variables

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected DB");
    } catch (error) {
        console.log("Error connecting to DB:", error);
    }
};

conn();
