const express = require('express');
const service = express();

service.get("/duclongs",(req, res)=>{
    res.send("Reading duclongs");
})

service.get("/duclongs/:id",(req, res)=>{
    const {id} = req.params;
    res.send(`Reading duclongs: ${id}.`);
})

service.post("/duclongs",(req,res) =>{
    res.send("Creating a duclong.");
})


service.put("/duclongs",(req,res) =>{
    res.send("Update a duclong.");
})



service.delete("/duclongs/:id",(req,res) =>{
    res.send("Delete a duclong.");
})


service.listen(3000, ()=>{
    console.log("The express Asp.net");
})