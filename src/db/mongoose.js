const mongoose = require('mongoose')

const connectionURL = "mongodb://127.0.0.1:27017/todo";



mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true});


// test if the mongoose connection is connected properly hehehe :)

// const Todo = mongoose.model('Todo', {
//     title:{
//         type:String,
//         trim:true,
//         required:true,  
//     },
//     completed:{
//         type:Boolean,
//         default:false,
//     }
// })

// const saveTodo = new Todo({title:'Wash Dishes'})

// saveTodo.save().then((result) =>{
//     console.log('Saved Todo', result)
// }).catch((err) =>
//     console.log(err)
// )