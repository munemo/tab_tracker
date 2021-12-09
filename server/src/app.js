const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(express.json())
app.use(cors({
    origin: "http://localhost:8081",
}));


app.post('/register', (req,res) => {

    res.send({
        message:`Hello ${req.body.email} you are now registered`
    })
})

app.listen(process.env.PORT || 8080)
