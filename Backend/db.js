const mongoose = require('mongoose');

// Ensure environment variables are loaded if not done already
require('dotenv').config();

const mongoURI = process.env.DB_KEY;

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);  // Optional, if you want to disable strict mode for queries
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });  // Await connection
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);  // More descriptive error logging
  }
};

module.exports = connectToMongo;
