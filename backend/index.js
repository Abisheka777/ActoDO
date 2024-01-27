const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todo").
then(function()
{
    console.log("Db Connected Successfully")
})
.catch(function()
    {
        console.log("Db Connection failed")

    }
)
//Choco is Model Name ans chocolate is collections name
const Choco= mongoose.model("Choco",{name:String},"chocolate")
//const chocolate= ["Tobelrone","Nestle","DairyMilk"]
app.get("/chocolist",function(req,res){
    Choco.find().
    then(function(retdata){
        console.log(retdata)
        res.send(retdata)
    })
   
})
app.post("/addchoco",function(req,res){
    var newchoco = req.body.newchoco
    const newChoco=new Choco(
        {
            name:newchoco
        }
    );
    newChoco.save().
    then(function(){
        console.log("Saved Successfully")
    })
    .catch(function(){
        console.log("Not Saved Yet")
    })
})

app.listen(5000,function(){
    console.log("Server Started !!!")
})
