const express = require("express")
const { default: mongoose } = require("mongoose")
const app = express()


app.use(express.json())

mongoose.connect("mongodb+srv://VIKASDANGI:VIKASDANGI@cluster0.k6nhiz2.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log("connected to db"))

const User = require("./routes/user")
app.use(User)

app.listen(8080,()=>console.log("Server is on "))