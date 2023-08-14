const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

app.get('/api/notes', async (req, res) => {
  try {
    const notes = await fs.readFile('db.json', 'utf8');
    res.json(JSON.parse(notes));
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve notes.' });
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const notes = await fs.readFile('db.json', 'utf8');
    const notesArray = JSON.parse(notes);

    const newNote = {
      id: notesArray.length + 1,
      title: req.body.title,
      text: req.body.text,
    };

    notesArray.push(newNote);
    await fs.writeFile('db.json', JSON.stringify(notesArray));

    res.json(newNote);
  } catch (error) {
    res.status(500).json({ error: 'Could not save note.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
