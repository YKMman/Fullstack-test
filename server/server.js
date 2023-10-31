require('dotenv').config()
const express = require('express')
const router = require('./router')
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = process.env.PORT || 4000

const app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var corsOptions = {
    origin: "http://localhost:5173"
};

app.use(cors(corsOptions));

app.use("/", router)


app.listen(PORT, () => {
    console.log(`server start on ${PORT}`)
})