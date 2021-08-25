const express = require('express');
const app  = express();


const port = process.env.PORT || 3000;
require('../src/db/mongoose')


const taskRouter = require('../src/routers/todo')


app.use(express.json())
app.use(taskRouter)



app.listen(port, () =>{
    console.log('listening on port', + port)
});