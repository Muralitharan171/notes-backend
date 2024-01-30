const express = require('express');
const router = express.Router();
const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require('../controllers/notes');
const Note = require('../models/note');
const { authenticateUser } = require('../middlewares/auth');

// Define routes for CRUD operations
router.use(authenticateUser);
router.get('/', getNotes);
router.post('/', createNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;