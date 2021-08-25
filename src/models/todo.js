
const mongoose = require('mongoose')

const Todo = mongoose.model('Todo', {
    title:{
        type:String,
        trim:true,
        required:true,  
    },
    completed:{
        type:Boolean,
        default:false,
    }
})

module.exports = Todo;
