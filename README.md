# FIND-MY-PLUG (EV Charging Station Finder)

This is an Electric Vehicle (EV) navigation web app to help Indian users find nearby charging stations based on location and battery status.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (static files in `public/`)
- **Backend:** Node.js with Express
- **Database:** MongoDB (using Mongoose ODM)

## Getting Started (Local Development)

1. **Clone the repo:**  
   ```bash
   git clone https://github.com/your-username/FIND-MY-PLUG.git
   cd FIND-MY-PLUG
   ```

2. **Install dependencies:**  
   ```bash
   npm install
   ```

3. **Set up environment variables:**  
   - Copy `.env.example` to `.env` and fill in the values.

4. **Start the server:**  
   ```bash
   npm start
   ```

## Deployment

This app is configured for deployment on **Render.com**:
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Environment Variables:** Set `MONGO_URI` in the Render dashboard.

## Author

Arjav Abjith (2025)
