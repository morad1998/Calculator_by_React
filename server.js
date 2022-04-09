//Server:

const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./databasev');
const dataModel = require('./datamodel') ;
app.use(express.json());
app.use(cors())
app.get("/",(req,res)=>{
    console.log("GET/Works");
    res.json("GET/WORKS");
});

app.get("/all",(req,res)=>{
    
    db.find({}, (err,data)=>{
        if(err){
            console.log('Error',err);
        }else{
            res.json(data);
        }
    })
        
});

app.get("/operation/:id",(req,res)=>{
    
    db.find({ operation : req.params.id }, (err,operation)=>{
        if(err){
            console.log('Error',err);
        }else{
            res.json(operation);
        }
    })
        
});

app.get("/createdAt/:id",(req,res)=>{    
    db.find({ createdAt : req.params.id }, (err,operation)=>{
        if(err){
            console.log('Error',err);
        }else{
            res.json(operation);
        }
    })
        
});

app.get("/operationA",(req,res)=>{    
    db.find({operation: req.query.operation}, (err,oper)=>{
       
        if(err){
            console.log('Error',err);
        }else{
            res.json(oper);
        }

    })  
});

   

app.post('/CalcAdd', (req,res)=>{
    
    db.create(req.body, (err,AddCalc)=>{
        if(err){
            console.log('error', err);
        }else{
            res.status(201).json(AddCalc)
        }
    } )
   
});

app.delete('/CalcAdd/:id', (req,res)=>{
    db.deleteOne({ _id: req.params.id }, (err, newdelete)=>{
        if(err){
            console.log('error', err);
        }else{
           
            res.status(201).json(newdelete);
            
        }
    });
})

app.post('/Addition', (req,res)=>{
    
    db.create({operation: req.query.operation, 
        OperandX: req.query.OperandX*1, 
        OperandY: req.query.OperandY*1, 
        Result: (req.query.OperandX*1)+(req.query.OperandY*1)}, (err,AddCalc)=>{
        if(err){
            console.log('error', err);
        }else{
            res.status(201).json(AddCalc)
        }
    } )
   
});


app.listen(5000,()=>{
    console.log('server is on 5000');
    

});