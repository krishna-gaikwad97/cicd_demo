import express from 'express';
import sum from './sum.js';
const app = express();
const port=8080;
app.listen(port,()=>{
    console.log("Server is running on port 3000");
});
app.get("/home",async(req,res)=>{
   res.json({message:"Hello World"});
});
app.get("/Getsum/:a/:b",async(req,res)=>{
    const {a,b}=req.params;
    res.json({ans:sum(parseInt(a),parseInt(b))});
});