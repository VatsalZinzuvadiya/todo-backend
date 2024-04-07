const express = require('express');
const todoController = require('../controllers/todoController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/',authMiddleware, todoController.create);
router.get('/',authMiddleware, todoController.getAll);
router.get('/:id',authMiddleware, todoController.getById);
router.put('/:id',authMiddleware, todoController.update);
router.delete('/:id',authMiddleware, todoController.remove);

module.exports = router;
