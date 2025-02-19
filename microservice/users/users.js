const express = require("express")
const app = express()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,'./config/.env')})
const PORT = process.env.PORT || "3001"

app.get("/", (req,res) => {
    res.send("User Application Running!")
})

app.get("/users", (req,res) => {
    res.json([{id: 1, name: "user1"}]);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})