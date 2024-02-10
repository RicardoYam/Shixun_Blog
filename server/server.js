const express = require('express')
const app = express()

app.get("/test", (req, res) => {
    res.json({"users": ["user1", "user2"]})
})

app.listen(5000, () => {console.log("server started on port 5000")})