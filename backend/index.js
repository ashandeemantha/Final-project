const express  = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const path = require("path");
const app = express();
app.use(express.static(path.join(__dirname, "../frontend/build"))); // Serve static files from the frontend build

app.use(cors())
app.use(express.json({limit : "10mb"}))

const PORT = process.env.PORT || 8080

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html")); // Serve the index.html file
});

app.post("/Signup", (req,res)=>{
    console.log(req.body)
})

app.listen(PORT,()=>console.log("server is running at port : " + PORT))
