const express = require('express');
const app = express();
const env = require('dotenv');
const mongoose = require('mongoose')

env.config()

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.yy8pj.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
})
        .then(() => {
            console.log("Database Connected !!!")
        })

app.use(express.json())

app.listen(4000,() => {
    console.log(`Server is running on port 4000`)
})