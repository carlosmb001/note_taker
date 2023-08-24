const router = require('express').Router();
const fs = require('fs');


//get all routes
router.get('/api/notes', (req, res) => {
  //try {
    const notes = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(notes));
  /* } catch (error) {
    res.status(500).json({ error: 'Could not retrieve notes.' });
  }*/
});

//create a new note
router.post('/api/notes', (req, res) => {
  try {
    const notes =  fs.readFileSync('./db/db.json', 'utf8');
    const notesArray = JSON.parse(notes);

    const newNote = {
      id: notesArray.length + 1,
      title: req.body.title,
      text: req.body.text,
    };

    notesArray.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesArray));

    res.json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Could not save note.' });
  }
});

//deleted a specific note
router.delete('/api/notes/:id', (req, res) => {
  try {
    const notes = fs.readFileSync('./db/db.json', 'utf8');
    const notesArray = JSON.parse(notes);

    const noteId = parseInt(req.params.id);
    const updatedNotes = notesArray.filter(note => note.id !== noteId);

    fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotes));

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Could not delete note.' });
  }
});
module.exports = router;
