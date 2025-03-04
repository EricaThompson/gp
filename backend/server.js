const express = require("express");
const app = express();
const cors = require("cors");
// const port = 2819;

const posts = require("./dummy-data/posts")

app.use(cors());

app.get("/", (req, res)=>{
    res.json({message: "Okay World"})
})

app.get("/posts", (req, res)=> {
    res.json(posts);
})

app.listen(2819)