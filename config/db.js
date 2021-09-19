const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`Подключено к MongoDB: ${conn.connection.host}`.cyan.bold);
  } catch (e) {
    console.log(`Ошибка подключения к MongoDB: ${e.message}`.red);
    process.exit(1);
  }
}

module.exports = connectDB;