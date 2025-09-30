# Test Node Project

Simple Node.js Express app for deployment testing.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Run the server:
```bash
npm start
```

3. Open your browser and visit:
- `http://localhost:3000` - Main page with HTML response
- `http://localhost:3000/api/health` - Health check endpoint (JSON)
- `http://localhost:3000/api/test` - Test endpoint (JSON)

## Endpoints

- `GET /` - Returns HTML page for easy browser testing
- `GET /api/health` - Returns server health status
- `GET /api/test` - Returns test data with environment info

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)

## Deployment

This app is ready for deployment to platforms like:
- Heroku
- Railway
- Vercel
- DigitalOcean App Platform
- AWS Elastic Beanstalk
