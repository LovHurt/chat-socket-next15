
https://github.com/user-attachments/assets/55deb0aa-25dc-4df0-bf09-379ce4b7cfbd


# Chat-Socket-Next15

![License](https://img.shields.io/github/license/LovHurt/chat-socket-next15)
![Next.js](https://img.shields.io/badge/Next.js-12.3.1-blue)
![Socket.io](https://img.shields.io/badge/Socket.io-4.5.0-green)

## 📖 Project Description

**Chat-Socket-Next15** is a real-time chat application built with [Next.js](https://nextjs.org/) and [Socket.io](https://socket.io/). It allows users to join specific chat rooms and communicate instantly with others within the same room. The project leverages Socket.io for efficient client-server communication, ensuring a seamless and responsive user experience.

## 🎯 Features

- **Real-Time Messaging:** Users can send and receive messages instantly within the same chat room.
- **Room Management:** Create and join different chat rooms to organize conversations.
- **User Authentication:** Users can join chat rooms with unique usernames.
- **System Messages:** Notifications when users join a room.
- **Responsive Design:** Optimized for both mobile and desktop devices.
- **Easy Setup:** Quick and straightforward installation and configuration process.

## 🚀 Getting Started

Follow these instructions to set up and run the project locally.

### 📋 Prerequisites

- **Node.js:** Version 14.x or higher
- **npm:** Version 6.x or higher (alternatively, you can use [Yarn](https://yarnpkg.com/))

### 📦 Installation

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/LovHurt/chat-socket-next15.git
    cd chat-socket-next15
    ```

2. **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Configure Environment Variables:**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    PORT=3000
    HOSTNAME=localhost
    ```

    *Note: These values are suitable for development. Update them appropriately for production environments.*

4. **Start the Development Server:**

    ```bash
    npm run dev:socket
    ```

    The application will be available at [http://localhost:3000](http://localhost:3000).

## 🛠️ Usage

1. **Join a Chat Room:**
    - On the homepage, enter your desired username and the name of the chat room you wish to join.
    - Click the “Join Room” button to enter the chat room.

2. **Send Messages:**
    - Once inside the chat room, type your message in the input field and send it.
    - Your message will appear in the chat area and will be visible to all other users in the same room.

3. **Manage Rooms:**
    - You can join different rooms by entering new room names, allowing you to participate in multiple conversations.

## 🧰 Technologies

- [Next.js](https://nextjs.org/) - React framework for production
- [Socket.io](https://socket.io/) - Real-time bidirectional event-based communication
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## 📁 Project Structure

chat-socket-next15/
├── components/
│   ├── ChatForm.tsx
│   └── ChatMessage.tsx
├── lib/
│   └── socketClient.ts
├── pages/
│   ├── api/
│   │   └── socket.ts
│   └── index.tsx
├── public/
│   └── screenshots/
│       ├── home.png
│       └── chat.png
├── styles/
│   └── globals.css
├── .env.local
├── package.json
├── tsconfig.json
└── README.md

- **components/**: Reusable React components.
  - `ChatForm.tsx`: Form for sending messages.
  - `ChatMessage.tsx`: Component to display individual messages.
- **lib/**: Socket.io client configuration.
  - `socketClient.ts`: Initializes and exports the Socket.io client instance.
- **pages/**: Next.js pages and API routes.
  - `api/socket.ts`: Socket.io server configuration and event handling.
  - `index.tsx`: Main chat interface page.
- **public/**: Static assets.
  - `screenshots/`: Directory for storing project screenshots.
- **styles/**: Global styles.
  - `globals.css`: Global CSS styles.
- **.env.local**: Environment variables.
- **package.json**: Project dependencies and scripts.
- **tsconfig.json**: TypeScript configuration.
- **README.md**: Project documentation.

## 🔧 Development

Customize and extend the project to fit your needs by following these guidelines.

### 💻 Code Editing

1. **Components:**
    - `components/ChatForm.tsx`: Handles the message input and submission.
    - `components/ChatMessage.tsx`: Displays individual chat messages with sender information.

2. **Socket.io Integration:**
    - `lib/socketClient.ts`: Configures the Socket.io client.
    - `pages/api/socket.ts`: Sets up the Socket.io server and manages socket events.

3. **Page Structure:**
    - `pages/index.tsx`: Main page where users can join rooms and chat.

### 🛠️ Socket.io Configuration

- **Server-Side:**
  Socket.io is integrated in the `pages/api/socket.ts` file. It handles user connections, room joining, and message broadcasting.

- **Client-Side:**
  The Socket.io client is configured in `lib/socketClient.ts` and used within the main page component to handle real-time communication.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📞 Contact

For any questions, feedback, or support, please reach out to [@LovHurt](https://github.com/LovHurt).


*Note: Ensure that the screenshots are placed in the `public/screenshots/` directory of your repository and update the image paths in the README accordingly.*

