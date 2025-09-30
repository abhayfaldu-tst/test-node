const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Test Node App</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; }
          .container { max-width: 600px; margin: 0 auto; }
          .success { color: #28a745; }
          .info { background: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="success">✅ Node.js App is Running!</h1>
          <div class="info">
            <h3>Deployment Test Successful</h3>
            <p><strong>Server:</strong> Express.js</p>
            <p><strong>Port:</strong> ${PORT}</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          <p>This is a simple test endpoint to verify your Node.js deployment is working correctly.</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Server is healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/test', (req, res) => {
  res.json({
    message: 'Test endpoint working!',
    data: {
      environment: process.env.NODE_ENV || 'development',
      nodeVersion: process.version,
      platform: process.platform
    }
  });
});

app.listen(PORT, () => {
  console.log(`::::: Server running on port ${PORT}`);
  console.log(`::::: Visit http://localhost:${PORT} to test`);
});
