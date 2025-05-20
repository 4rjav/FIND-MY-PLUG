# EV Navigator App (India)

This is an Electric Vehicle (EV) navigation web app for Indian users. It helps users find the nearest EV charging stations based on their vehicle's battery level, location, and destination.

## Features

- Real-time location tracking
- Input EV model to estimate power usage
- Smart battery vs distance calculations
- Navigation to destination with auto-charging alerts
- Charging station finder with route assistance
- Sleek, user-friendly dark UI (Swiggy-style)
- User login, trip history, and saved routes
- Built using Node.js, Express, MongoDB, HTML/CSS

## Tech Stack

- **Frontend**: HTML/CSS (via `public/index.html`)
- **Backend**: Node.js with Express
- **Database**: MongoDB (via Mongoose)

## Getting Started (Local Development)

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/ev-navigator.git
   cd ev-navigator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file and add your Mongo URI:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Open `http://localhost:3000` in your browser.

## Deployment

This app is designed to run on Render:

- **Root Directory**: `.`
- **Build Command**: `npm install`
- **Start Command**: `node server.js`
- Add `MONGO_URI` as an environment variable in your Render service

## Author

Arjav Abjith — 2025