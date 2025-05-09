# QC App - Quincy College PWA Companion

## Overview

QC App is a Progressive Web Application (PWA) designed to streamline student experience at Quincy College by providing essential tools for campus navigation, resource access, and academic tracking.

## Core Features

- Interactive Campus Room Finder
- Quick Links to Campus Resources
- Assignment Calendar 
- Grade Tracking Dashboard

## Prerequisites

- Node.js (v18.x or later)
- npm (v9.x or later)
- Git
- Modern web browser

## Installation

1. Clone the repository
```bash
git clone https://github.com/quincycollege/qc-app.git
cd qc-app
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file with configuration variables:
```
REACT_APP_API_BASE_URL=https://api.quincycollege.edu
REACT_APP_AUTH_TOKEN=your_authentication_token
```

## Project Structure

```
qc-app/
│
├── src/
│   ├── assets/
│   │   ├── qc_favicon.ico
│   │   ├── qc_favicon.png
│   │   └── qc_logo_seal.png
│   │
│   ├── Index/
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   │
│   ├── Learn/
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   │
│   ├── Links/
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   │
│   ├── Rooms/
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── main.css
│   └── main.jsx
│
├── index.html
└── README.md
```

## Development Scripts

```bash
# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Key Components

### Room Finder
- Search functionality for campus rooms
- Interactive campus map integration
- Room availability status
- Building directory

### Quick Links
- Direct access to:
  - Canvas
  - College Portal
  - Library Resources
  - Academic Departments

### Assignment Calendar
- Canvas assignment synchronization
- Due date tracking
- Reminder notifications
- Semester overview

### Grade Tracking
- Course grade display
- GPA calculation
- Semester progress visualization
- Historical grade analysis

## Technologies

- React 18
- React Router
- Tailwind CSS
- Axios for API calls
- Jest for testing

## Deployment Platforms
- Netlify
- Vercel
- GitHub Pages

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## License

MIT License

