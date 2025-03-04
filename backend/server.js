const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path")
// const port = 2819;

const posts = require("./dummy-data/posts");
const users = require("./dummy-data/users");

app.use('/images', express.static(path.join(__dirname, 'dummy-data/images')));

app.use(cors());

app.get("/", (req, res)=>{
    res.json({message: "Backend ✅"})
})

app.get("/posts", (req, res)=> {
    res.json(posts);
})

app.get("/users", (req, res)=> {
    res.json(users);
})
app.listen(2819)