const express= require("express");

const Pizza = require('./models/pizzaModel')

const db = require("./db")

const app= express();

app.use(express.json());



app.get("/",(req,res)=>{
    res.send("server working");
});

app.get("/getpizzas",(req,res)=>{
    Pizza.find({},(err, docs)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(docs)
        }
    })
});

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
