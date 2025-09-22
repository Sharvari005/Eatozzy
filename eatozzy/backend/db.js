const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://sharvarijamkar14_db_user:iXLdw9jLUDLpudGO@cluster0.qvdpamx.mongodb.net/eatozzy?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("✅ Connected to MongoDB");

    const fetched_data = mongoose.connection.db.collection("fooditems");
    const data = await fetched_data.find({}).toArray();
    console.log("🍔 Food Items:");

  } catch (err) {
    console.log("❌ MongoDB Error:", err);
  }
};

module.exports = mongoDB;
