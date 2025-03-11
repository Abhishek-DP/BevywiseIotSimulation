const aedes = require('aedes')();
const net = require('net');
const ws = require('websocket-stream');
const http = require('http');
const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./db1'); // Import database logic

const mqttPort = 1883;
const wsPort = 8081;
const httpPort = 9001;

const app = express();
//app.use(cors()); // Enable CORS for all requests
/*const corsOptions = {
  origin: '*',  // Allow all origins for testing
  methods: 'GET,POST,PUT,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options('*', cors(corsOptions));
*/
// ✅ Enable CORS with proper configuration
app.use(cors({
  origin: "*",  // Allow all origins (You can restrict this later)
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "Content-Type,Authorization"
}));

app.use(express.json());

// ✅ Handle Preflight Requests (OPTIONS Method)
app.options("*", cors());

app.use(express.json());

// Serve static files (e.g., index.html, CSS, JS) from the "public" folder
app.use(express.static('public'));
// ✅ Route to serve index.html when visiting the root URL "/"
/*app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});*/
// ✅ **Serve index.html when visiting /graphs**
app.get('/graphs', async (req, res) => {
/*	res.setHeader("Access-Control-Allow-Origin", "*");  // Allow all origins
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  res.sendFile(path.join(__dirname, 'public', 'index.html'));*/
	try {
    console.log("🚀 API Request received at /graphs");
    const data = await db.getSensorData();
   // res.json(data);
		// Send HTML page that will fetch data dynamically
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  } catch (error) {
    console.error("❌ Error in API:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// API to fetch sensor data for graphs
app.get('/sensor-data', async (req, res) => {
  try {
    const sensorData= await db.getSensorData();
    res.json(sensorData);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Failed to fetch sensor data' });
  }
});

// ✅ **API Endpoint to fetch sensor data (returns JSON)**
/*app.get('/api/graphs', (req, res) => {
  db.getSensorData((err, results) => {
    if (err) {
      console.error('❌ Error fetching data:', err);
      return res.status(500).json({ error: 'Failed to fetch data' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'No data found' });
    }

    res.json(results);
  });
});*/

// ✅ **Start the HTTP server**
app.listen(httpPort, () => {
  console.log(`✅ HTTP Server running on http://localhost:${httpPort}`);
});

// ✅ **Start MQTT Broker**
const mqttServer = net.createServer(aedes.handle);
mqttServer.listen(mqttPort, () => {
  console.log(`✅ MQTT broker running on port ${mqttPort}`);
});

// ✅ **Start WebSocket Server for MQTT**
const httpServer = http.createServer();
const wsServer = ws.createServer({ server: httpServer }, (stream) => {
  console.log('✅ WebSocket connection established');
  stream.on('error', (err) => console.error(`🚨 WebSocket Error: ${err.message}`));
  aedes.handle(stream);
});
httpServer.listen(wsPort, () => {
  console.log(`✅ WebSocket server running on port ${wsPort}`);
});

// ✅ **MQTT Debugging & Error Logs**
aedes.on('client', (client) => console.log(`👤 Client connected: ${client.id}`));
aedes.on('clientDisconnect', (client) => console.log(`❌ Client disconnected: ${client.id}`));
aedes.on('publish', (packet, client) => {
  if (client) {
    console.log(`📢 Client ${client.id} published: ${packet.payload.toString()}`);
    db.insertData(packet.topic, packet.payload.toString());
  }
});
aedes.on('subscribe', (subscriptions, client) => {
  console.log(`📌 Client ${client.id} subscribed to: ${subscriptions.map(s => s.topic).join(', ')}`);
});
aedes.on('error', (err) => console.error(`❌ Aedes error: ${err.message}`));

