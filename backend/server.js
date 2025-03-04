const express = require("express");
const app = express();
const cors = require("cors");
// const port = 2819;

app.use(cors());

app.get("/api", (req, res)=>{
    res.json({message: "Okay World"})
    res.send({note: "it's alive"})
})

app.listen(2819)