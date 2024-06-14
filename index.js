const express = require('express')
const cors = require('cors')
require("dotenv").config();

const { connectDB } = require('./config/database')
connectDB()

//route
const subscriberRoute = require('./router/subRoute')

const app = express()
app.use(express.json())
app.use(cors());
const { PORT } = process.env

//url
app.use('/api/subscriber', subscriberRoute)

app.listen( PORT, ()=>{
    console.log(`service is running at port ${PORT}`)
})




