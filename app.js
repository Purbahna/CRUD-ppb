const express = require('express');
const mongoose = require('mongoose');
const tasks = require('./models/tasks')


//Express App
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://purbahna2001:batchas123@purbahna2001.3xuty.mongodb.net/purbahna2001'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result =>{
    console.log(result)
    app.listen(5000)
    console.log("Mongodb Connected.....")
})
.catch(err => console.log(err));


app.get('/add-task1', (req, res)=>{
    const task = new tasks({
        title: "Task1",
        Description: 'Task1 going on..',
        Completed: true
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})
app.get('/add-task2', (req, res)=>{
    const task = new tasks({
        title: 'Task2',
        Description: 'Task2 going on..',
        Completed: false
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})
app.get('/add-task3', (req, res)=>{
    const task = new tasks({
        title: 'Task3',
        Description: 'Task3 going on..',
        Completed: false
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})
app.get('/add-task4', (req, res)=>{
    const task = new tasks({
        title: 'Task4',
        Description: 'Task4 going on..',
        Completed: true
    })
    task.save()
      .then((result) => {
        console.log(result)
        console.log('created...')
        res.send(result)
        
      })
      .catch((err)=>{
          console.log(err)
      })
})

//Read Documents (Complete--> false)
app.get('/find-completed', (req, res)=>{
    
    tasks.find({Completed: false}).count()
      .then((result) => {
        console.log('Found...')
        console.log(result)

        res.send(result)
    

      })
      .catch((err)=>{
          console.log(err)
      })

})

//Read all documents
app.get('/all-tasks', (req, res)=>{
    tasks.find()
    
      .then((result) => {
          console.log(result)
        res.send(result)
       
      })
      .catch((err)=>{
          console.log(err)
      })
})

//update
app.get('/update', (req, res)=>{
    
    tasks.update({Completed: true})
    
      .then((result) => {
        console.log(result)
        console.log('updated')
        res.send(result)
    

      })
      .catch((err)=>{
          console.log(err)
      })

})

//Delete By ID

app.get('/delete', (req, res)=>{
    
    tasks.findByIdAndDelete('622a66ac762acd359278f871')
      .then((result) => {
        console.log(result)
        console.log('Deleted')
        res.send(result)
    

      })
      .catch((err)=>{
          console.log(err)
      })

})


