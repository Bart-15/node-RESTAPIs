const express = require('express');
const Todo = require('../models/todo')

const router = express.Router();


// create single todo 

router.post('/api/todo', async (req, res)=> {
  
    const todo = new Todo(req.body);
    
    try{
        await todo.save()
        res.send(todo)
    } catch(err){
        res.status(400).send()
    }

})

// fetch all todos
router.get('/api/todos', async (req, res) => {
   
    try{
        const todos = await Todo.find({})
        if(!todos){
            return res.status(404).send()
        }
        res.send(todos)
    }catch(err){
        res.status(500).send()
    }
})



// fetchSingleTodo by ID
router.get('/api/todo/:id', async (req, res) =>  {
    try{
        const todo = await Todo.findById(req.params.id)
        if(!todo){
            return res.status(404).send()
        }
        res.status(201).send(todo)
    } catch(err){
        res.status(500).send()
    }
})


// updateTodoby id
router.patch('/api/todo/:id', async (req, res) => {

    // validate the update check if the if updateOptions is inside od update required
    const updates = Object.keys(req.body)
    const allowedUpdates = ['title', 'completed'];
    const isValidToUpdate = updates.every(update => allowedUpdates.includes(update)); 

    // if fails 
    if(!isValidToUpdate){
        return res.send({error:'Invalid Update'})
    }

    // sucess!!!
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new:true})
        if(!todo){
            return res.status(404).send();

        }
        res.send(todo);
    }catch(err){
        res.status(500).send()
    }
})



// find by id and delete it
router.delete('/api/todo/:id', async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id)
        if(!todo){
            return res.status(404).send()
        }

        res.send(todo)
    }catch(e){
        res.status(500).send();
    }
})


module.exports = router;