
const mongoose = require('mongoose')
const dotenv = require('dotenv');


dotenv.config()

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}
console.log(process.env.MONGODB_URI)
console.log(process.env.NODE_ENV)
module.exports = connectDB