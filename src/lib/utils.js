const mongoose = require('mongoose');

const connection = {};

const connectToMongo = async () => {
  try {
    if (connection.isConnected) {
      console.log('Using existing connection');
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    console.log('MongoDB URI:', process.env.MONGO);

    connection.isConnected = db.connections[0].readyState;
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err);
    throw new Error('Failed to connect to MongoDB');
  }
};

module.exports = { connectToMongo };
