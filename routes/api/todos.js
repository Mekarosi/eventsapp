const express = require('express');
const router = express.Router();
const config = require('config');
const Todo = require('../../models/Todo');

//@route  GET api/todos
//@desc   List all todos

router.get('/', (req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  });
});

//@route  POST api/todos/add
//@desc   Create new todo

router.post('/add', async (req, res) => {
  try {
    let todo = new Todo(req.body);
    await todo.save().then((todo) => {
      res.status(200).json({ todo: 'todo added successfully' });
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).send('adding new todo failed');
  }
});

//@route  GET api/todos/:id
//@desc   Find todo by id

router.get('/:id', async (req, res) => {
  try {
    let id = req.params.id;
    await Todo.findById(id, (err, todo) => {
      if (err) {
        return res.send('id does not exist');
      }
      res.json(todo);
    });
  } catch (err) {
    console.error(err.message);
  }
});

// @route   POST api/todos/update/:id
// @desc    Edit todo

router.post('/update/:id', async (req, res) => {
  try {
    await Todo.findById(req.params.id, (err, todo) => {
      if (!todo) res.status(404).send('data is not found');
      else todo.todo_description = req.body.todo_description;
      todo.todo_responsible = req.body.todo_responsible;
      todo.todo_priority = req.body.todo_priority;
      todo.todo_completed = req.body.todo_completed;
      todo.todo_startdate = req.body.todo_startdate;
      todo.todo_completeddate = req.body.todo_completeddate;

      todo.save().then((todo) => {
        res.json('Todo updated!');
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(400).send('Update not possible');
  }
});

// @route  DELETE api/todos/delete/:id
// @desc   Delete todo

router.delete('/delete/:id', async (req, res) => {
  try {
    await Todo.findByIdAndRemove(req.params.id, (err, todo) => {
      if (err) res.status(400).json({ msg: 'Todo not Deleted' });
      else {
        res.status(200).json({ msg: `Todo deleted` });
      }
    });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
