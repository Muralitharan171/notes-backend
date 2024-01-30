const Note = require('../models/note');

// Get all notes for a user
exports.getNotes = async (req, res) => {
  try {
    const userId = req.userId;

    // Find all notes for the user
    const notes = await Note.find({ userId });

    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create a new note
exports.createNote = async (req, res) => {
  try {
    const userId = req.userId;
    const { title, content, deadline } = req.body;

    // Create a new note
    const newNote = new Note({ userId, title, content, deadline });
    await newNote.save();

    res.status(201).json({ message: 'Note created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Update a note
exports.updateNote = async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, content, deadline, isCompleted } = req.body;

    // Update the note
    await Note.findByIdAndUpdate(noteId, { title, content, deadline, isCompleted });

    res.json({ message: 'Note updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Delete a note
exports.deleteNote = async (req, res) => {
  try {
    const noteId = req.params.id;

    // Delete the note
    await Note.findByIdAndDelete(noteId);

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

