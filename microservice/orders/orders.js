const express = require("express")
const app = express()
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname,'./config/.env')})
const PORT = process.env.PORT || "3002"

app.get("/", (req,res) => {
    res.send("Orders Application Running!")
})

app.get("/orders", (req,res) => {
    res.json ([{id: 101, product: "Laptop"}]);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})