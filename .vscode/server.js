const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let users = [];

/* USER SAVE */
app.post("/login", (req,res)=>{
    users.push(req.body);
    res.json({msg:"saved"});
});

/* ADMIN DATA */
app.get("/admin-data", (req,res)=>{
    res.json({users});
});

app.listen(3000, ()=>{
    console.log("Server running on http://localhost:3000");
});