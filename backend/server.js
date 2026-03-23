import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Custom Logging Middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const ms = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} - ${res.statusCode} - ${ms}ms`);
  });
  next();
});

// Load CMS Data
const readCMSData = () => {
  const dataPath = path.join(__dirname, 'data', 'cms.json');
  const fileData = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(fileData);
};

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime(), timestamp: Date.now() });
});

app.get('/api/portfolio', (req, res) => {
  try {
    const data = readCMSData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to load portfolio data' });
  }
});

app.get('/api/training', (req, res) => {
  const trainingData = [
    {
      title: "Mobile Application Developer Using Flutter",
      subtitle: "CERTIFICATE",
      date: "July 2025",
      description: "Successfully completed a hands-on training program in building cross-platform mobile applications using Flutter and Dart. Gained practical experience in designing responsive interfaces, managing app flow, and deploying functional mobile apps.",
      duties: [
        "Developed strong skills in widget-based UI development, state management, and integrating external services. Worked extensively with REST APIs, JSON data handling, and Firebase for backend connectivity.",
        "Flutter and Dart for cross-platform mobile app development. Firebase, REST APIs, and JSON for backend integration and data handling."
      ],
      techStack: ["Flutter", "Dart", "Firebase", "REST APIs", "JSON"],
      type: "TRAINING",
      file: "/pdfs/Certificate.pdf"
    }
  ];
  res.json(trainingData);
});

// Mock Contact API with minimal rate limiting logic (in memory)
const rateLimitCache = {};
app.post('/api/contact', (req, res) => {
  const ip = req.ip;
  const now = Date.now();
  if (rateLimitCache[ip] && now - rateLimitCache[ip] < 60000) {
    return res.status(429).json({ error: 'Too many requests. Please wait a minute.' });
  }
  rateLimitCache[ip] = now;
  
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  
  console.log(`Contact Submission: ${name} (${email}): ${message}`);
  res.json({ success: true, message: 'Message received successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
