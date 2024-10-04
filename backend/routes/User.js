const express = require('express');
const router = express.Router();
const {getTasks,postTasks,deleteTasks,updateTask} = require('../controllers/taskController');



router.get('/' , getTasks);
router.post('/' ,postTasks);
router.delete('/:id' ,deleteTasks);
router.put('/:id' ,updateTask);
module.exports = router; 