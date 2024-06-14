const mongoose = require('mongoose')

const { MONGODB_URL } = process.env
const connectDB = async ()=>{
    try{
        await mongoose.connect(MONGODB_URL,{
          useNewUrlParser: true,
          useUnifiedTopology: true
        })
        console.log("DB connected successfully")
    }catch(error){
        console.log("mongoDB connection error", error.message)
    }
}
module.exports = { connectDB }