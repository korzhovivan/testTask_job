import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import apiServer from './apiServer.js'

//MONGO
const MONGODB_URL = process.env.MONGODB_URL
mongoose.Promise = Promise
mongoose.connect(MONGODB_URL)

mongoose.connection.on('error', error => {
	console.log(`MongoDB is not connected with error: ${error}`)
})

mongoose.connection.once('connected', () => {
	console.log('MongoDB is connected')
})

const server = express()

apiServer(server)

// Start server
const PORT = process.env.PORT || 4001
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
