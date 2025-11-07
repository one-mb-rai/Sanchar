# Sanchar

A WhatsApp Web clone built with Angular 20. Sanchar is a modern, responsive web messaging application that replicates the look and feel of WhatsApp Web.

![Sanchar Initial View](https://github.com/user-attachments/assets/2288ce5e-0068-4a85-94fa-5c8fc120b2c8)

## Features

✅ **WhatsApp-like UI** - Clean, modern interface matching WhatsApp Web's design  
✅ **Chat List** - View all your conversations with timestamps and unread counts  
✅ **Real-time Messaging** - Send and receive messages instantly  
✅ **Message Status** - Track message delivery with sent/delivered/read indicators  
✅ **Responsive Design** - Works seamlessly on desktop and mobile devices  
✅ **Conversation View** - Full chat history with message bubbles  
✅ **Online Status** - See when contacts are online  

![Sanchar Chat View](https://github.com/user-attachments/assets/e321c30e-6b83-4124-8703-7a59034fcd08)

## Technologies Used

- **Angular 20** - Modern web framework
- **TypeScript** - Type-safe development
- **CSS3** - Custom styling with WhatsApp's green theme
- **RxJS** - Reactive programming with Signals
- **Jasmine/Karma** - Testing framework

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm 10.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/one-mb-rai/Sanchar.git
cd Sanchar
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Run the development server:
```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Build

Build the project for production:
```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Running Tests

Execute the unit tests:
```bash
npm test
```

For continuous testing during development:
```bash
npm test -- --watch
```

## Project Structure

```
src/
├── app/
│   ├── chat-list/           # Chat list sidebar component
│   ├── chat-window/         # Main chat conversation component
│   ├── message-input/       # Message input component
│   ├── models/              # TypeScript interfaces
│   ├── app.component.*      # Root component
│   └── chat.service.ts      # Chat data service
├── styles.css               # Global styles
└── index.html              # Main HTML file
```

## Features in Detail

### Chat List
- Displays all conversations with contact names and avatars
- Shows last message preview and timestamp
- Indicates unread message count with green badges
- Highlights selected chat

### Chat Window
- Shows full conversation history
- Displays messages in chat bubbles (white for received, green for sent)
- Shows message timestamps
- Indicates message status (✓ sent, ✓✓ delivered, ✓✓ read in blue)
- Auto-scrolls to latest message

### Message Input
- Type and send messages
- Press Enter to send
- Emoji button for future emoji picker
- Send button activates when text is entered

![Message Sent](https://github.com/user-attachments/assets/73c386ba-4a8e-4d21-8d8b-d1adf4ba8a10)

## Mock Data

The application currently uses mock data for demonstration purposes. The `chat.service.ts` file contains sample conversations with 4 contacts. In a production environment, this would be replaced with real backend API calls.

## Future Enhancements

- 🔄 Real-time messaging with WebSocket integration
- 📎 File attachments and media sharing
- 🎨 Emoji picker integration
- 🔍 Search functionality
- 👤 User profile management
- 🔐 Authentication and authorization
- 📱 Progressive Web App (PWA) support
- 🌙 Dark mode
- 🔊 Message notifications
- ✏️ Message editing and deletion

## License

This project is created for educational purposes as a demonstration of Angular development skills.

## Acknowledgments

- Design inspired by WhatsApp Web
- Built with Angular and modern web technologiesApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.9.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
