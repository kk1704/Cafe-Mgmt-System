const express = require("express")
const dotenv = require('dotenv').config()
const bodyParser = require('body-parser')
const User = require('./models/user')
const { createUser } = require('./controllers/controller')
const userCr = require('./routes/userRoute')

const port = process.env.PORT
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/user', userCr)

// User.sync({ alter: true })
User.sync()
    .then((result) => {
        // createUser()
        console.log('Table and model synced successfully....')
    })
    .catch((err) => {
        console.log("ERROR WHILE SYNCING...")
    })

app.listen(port, () => {
    console.log(`This app is running on http://localhost:${port}`)
})
