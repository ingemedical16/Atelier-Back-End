# 1. Project Structure
We will separate the backend and frontend, but both will run on the same server. Let's outline the folder structure:
project-root/
│
├── backend/ (Node.js + Express + Socket.io)
│   ├── controllers/ (Authentication, Game logic, Chat)
│   ├── modules/ (Game, User models)
│   ├── routes/ (Authentication, Game, Chat)
│   ├── middleware/ (JWT validation, OAuth)
│   ├── utils/ (helper functions)
│   ├── public/ (static files for serving images, etc.)
│   └── app.js (main server file)
│
└── frontend/ (Angular standalone)
    ├── src/
    │   ├── app/
    │   │   ├── components/ (Game Cards, Chat, Profile)
    │   │   ├── services/ (API service, Socket.io)
    │   │   └── pages/ (Home, Single-Player, Multiplayer, Game Page, Chat)
    └── package.json
