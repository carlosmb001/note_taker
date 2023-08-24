📝 Note Taker (Express.js)
Write and organize your notes with ease!

🌟 Description
An application designed to help small business owners write, save, and organize their notes. This project utilizes Express.js to power its back end, leveraging JSON files to store and retrieve notes.

Note Taker Demo

[Functionality](<Assets/note_taker preview_recording.mov>)

📜 User Story
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete

✨ Features
📄 Landing page with a link to the notes page.
📋 List of existing notes and fields to create new notes.
🖋 Ability to view, save, and (optionally) delete notes.

🚀 Installation
Clone the repository.
Navigate to the directory and run npm install.
To start the server, run node server.js.
Visit localhost:3000 in your browser to access the application.

🔗 API Routes
GET /notes - Returns the notes.html page.
GET * - Returns the index.html page.
GET /api/notes - Returns all saved notes as JSON.
POST /api/notes - Accepts a new note, saves it, and returns the saved note.
DELETE /api/notes/:id (Bonus) - Deletes a note with a specific ID.

🌍 Deployment

[!Note Taker Website](https://note-taker-1010-f0d2b7ee2090.herokuapp.com/)

🤝 Contribution
Contributions, issues, and feature requests are welcome. Feel free to check the issues page if you want to contribute.

📋 Grading and Requirements
For details on grading and requirements, please check the original assignment brief provided above.

📄 License
This project is MIT licensed.

👏 Acknowledgements
edX Boot Camps LLC for the project prompt and resources.



