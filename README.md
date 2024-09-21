# Platform Games: Immerse Yourself in Exciting Single-Player and Multiplayer Challenges!
This project brings you a full-fledged platform game website where you can discover and play a variety of captivating games. It offers a streamlined user experience with features that cater to both solo adventurers and collaborative players:

- **Discover a World of Games**: Explore a diverse collection of single-player and multiplayer games. Each game card displays helpful information like review stars and play counts, enticing you to explore further.
- **Unleash Your Skills**: Dive into engaging single-player and multiplayer challenges. Whether you prefer solo quests or friendly competition, this platform has something for everyone.
- **Forge Connections**: Teamwork makes the dream work! Foster camaraderie with friends or fellow players by creating or joining game rooms. Engage in real-time communication through integrated chat functionality within rooms.
- **Tailored Conversations**: Initiate one-on-one chats with individual players for personalized interactions.
Intuitive Navigation: Navigate effortlessly through well-organized pages for single-player, multiplayer, game details, chat interfaces, and user profiles.
## Built with Modern Technologies

The project leverages a robust tech stack to deliver a seamless experience:

- **Backend**: Node.js (ESM import/export), Express, Socket.io, Mongoose (MongoDB)
- **Frontend**: Angular Standalone (TypeScript, HTML, CSS)
## Project Structure Explained

The project follows a clear and modular structure for easy maintenance and scalability:

### Backend (Node.js + Express + Socket.io)

- ```backend/```: This directory houses the backend server code.
    - ```controllers/```: Logic for handling API requests related to authentication, game management, and chat functionalities.
    - ```modules/```: Defines models for core entities like games and users.
    - ```routes/```: Defines API endpoints for user interactions like login, fetch games, etc.
    - ```middleware/```: Handles middleware functions like JWT validation and OAuth authentication.
    - ```utils/```: Contains helper functions for common tasks like password hashing or token generation.
    - ```public/```: Stores static files like images or HTML templates used by the frontend.
    - ```app.js```: The main server file, responsible for initializing the server, connecting to the database, and starting all necessary services.
### Frontend (Angular Standalone)

- ```frontend/```: This directory houses the frontend code for the Angular application.
    - ```src/```: The source code directory for the Angular application.
        - ```app/```: Core application components and services reside here.
            - ```components/```: Reusable UI components for displaying game cards, chat interfaces, user profiles, and other elements.
            - ```services/```: Handles data interaction with the backend API using HttpClient and establishes real-time communication via Socket.io.
            - ```pages/```: Houses components specifically designed for specific pages like the home page, single-player games, multiplayer games, individual game pages, and chat interfaces.
    - ```package.json```: Contains information about the project's dependencies and scripts.
### Getting Started

1. **Prerequisites**: Ensure you have Node.js (with npm or yarn) and a MongoDB instance running.
2. **Clone or Download the Repository**: Access the source code for this project through your preferred method (e.g., Git clone).
3. **Install Dependencies**: Run ```npm install``` or ```yarn install``` in the project's root directory to install the necessary dependencies.
4. **Configure Environment**: Create a ```.env``` file in the root directory and set environment variables specific to your development or production setup (database connection string, secret keys).
5. **Run the Server**: Execute ```node backend/app.js``` (or equivalent command based on your setup) to start the Node.js backend server.
6. **Run the Angular Application:** Navigate to the ```frontend/``` directory and execute ```ng serve``` (or equivalent command based on your version) to build and run the Angular frontend application.
### Contribution

We welcome contributions to this project! Please refer to the CONTRIBUTING.md file (if available) for guidelines on code style, testing, and pull request processes.