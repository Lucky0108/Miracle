const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose')
const cors = require('cors')

// Routes
const authRoutes = require('./routes/auth')
const newsletterRoutes = require('./routes/newsletter')
const queryRoutes = require('./routes/query')

// Environment Variable Config
env.config()

// Database Connect
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.re5la.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
})
        .then(() => {
            console.log("Database Connected!!!")
        })


// Route Setup
app.use(cors())
app.use(express.json())
app.use('/api', authRoutes)
app.use('/api', newsletterRoutes)
app.use('/api', queryRoutes)

app.listen(4000,() => {
    console.log(`Server is running on port 4000`)
})