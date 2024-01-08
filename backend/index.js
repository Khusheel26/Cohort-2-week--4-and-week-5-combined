const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./database');
const cors = require("cors")

 
const app = express()

app.use(express.json())

// app.post('/signin',(req,res)=>{

// })

// app.post('/signup',(req,res)=>{

// })

app.use(cors());
app.post('/todo', async (req, res) => {
    const todobody = req.body;
    const result = createTodo.safeParse(todobody);

    if (!result.success) {
        return res.status(411).json({ msg: 'You have sent the wrong input.' });
    }

    try {
        const createdTodo = await todo.create({
            title: todobody.title,
            description: todobody.description,
            completed: false
        });

        res.json({
            msg: "Todo created",
            todoId: createdTodo._id // Assuming '_id' comes from the createdTodo object
        });
    } catch (err) {
        res.status(500).json({ msg: 'Error creating todo' });
    }
});

app.get('/todos',async (req,res)=>{
        const todos = await todo.find({});
        res.json({
            todos
        })
})

app.put('/completed', async (req, res) => {
    const todoId = req.body.id; // Assuming '_id' is the key for the todo ID in the request body

    try {
        // Check if the todoId is valid, you might have your own validation logic here
        if (!todoId) {
            return res.status(411).json({ msg: "You have sent the wrong todo id" });
        }

        // Update the todo with the given ID to mark it as completed
        const updatedTodo = await todo.findByIdAndUpdate(todoId, { completed: true }, { new: true });

        if (!updatedTodo) {
            return res.status(404).json({ msg: "Todo not found" });
        }

        res.json({
            msg: "Todo marked as completed",
            updatedTodo // Optionally, send the updated todo back in the response
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
});
app.listen(3000)