# 📝 Note Taker (Express.js)
Write and organize your notes with ease!

## 🌟 Description
An application designed to help small business owners write, save, and organize their notes. This project utilizes Express.js to power its back end, leveraging JSON files to store and retrieve notes.

![Preview](assets/Note_Taker.gif))<br>

## 📜 User Story
AS A small business owner<br>
I WANT to be able to write and save notes<br>
SO THAT I can organize my thoughts and keep track of tasks I need to complete<br>

## ✨ Features
📄 Landing page with a link to the notes page.<br>
📋 List of existing notes and fields to create new notes.<br>
🖋 Ability to view, save, and (optionally) delete notes.<br>

## 🚀 Installation
1. Clone the repository.
2. Navigate to the directory and run npm install.
3. To start the server, run node server.js.
(if you have npm installed run npm start)
4. Visit localhost:3001 in your browser to access the application.

## 🔗 API Routes
GET /notes - Returns the notes.html page.<br>
GET * - Returns the index.html page.<br>
GET /api/notes - Returns all saved notes as JSON.<br>
POST /api/notes - Accepts a new note, saves it, and returns the saved note.<br>
DELETE /api/notes/:id (Bonus) - Deletes a note with a specific ID.<br>

## 🌍 Deployment

[Note Taker](https://note-taker-1010-f0d2b7ee2090.herokuapp.com/)

## 🤝 Contribution
-Tutor Andres Jimenez
-
## 📄 License
This project is MIT licensed.
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 👏 Acknowledgements
edX Boot Camps LLC for the project prompt and resources.



