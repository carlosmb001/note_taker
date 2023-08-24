const router = require('express').Router();
const fs = require('fs');

router.get('/api/notes', (req, res) => {
  //try {
    const notes = fs.readFileSync('./db/db.json', 'utf8');
    res.json(JSON.parse(notes));
  /* } catch (error) {
    res.status(500).json({ error: 'Could not retrieve notes.' });
  }*/
});

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

module.exports = router;
