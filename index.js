'use strict'
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

var cors = require('cors')
app.use(cors())
app.options('*', cors());

var libro_route = require('./routes/libroRoute');

const mongoose = require('mongoose')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api', libro_route)

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true, //this is the code I added that solved it all
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4, // Use IPv4, skip trying IPv6
    useFindAndModify: false,
    useUnifiedTopology: true
}

mongoose.connect(`mongodb://192.99.144.232:27017/grupo18?security=false`, options)
.then(() => console.log('> Successfully connected to DB'))
.catch(err => console.log(err))  

app.listen(5000, () => {

  console.log('> Servicio corriendo en puerto 5000')
})