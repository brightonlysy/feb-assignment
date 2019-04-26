const express = require('express')
const app = express()

// Server Route
app.get("/", (req, res) => {
    res.send("Hello World")
})




app.listen(7000, () => {
    console.log("server is running on Port 7000")
})