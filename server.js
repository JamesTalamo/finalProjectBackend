
//BACKEND 
const cors = require('cors')

require('dotenv').config()
const connectDB = require('./config/connectDB')

const path = require('path')

const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
connectDB()


app.use('/api', require('./Routes/routes'))

app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname,'main.html'))
})


const PORT = process.env.PORT || 9191
app.listen(PORT, () => console.log(`Listening to PORT ${PORT} BACKEND`))