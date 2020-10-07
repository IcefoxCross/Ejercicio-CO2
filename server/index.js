require('dotenv').config();
const express = require('express');
const cors = require('cors');

// App setup
const app = express();
app.use(express.json());
app.use(cors());

// Database
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

// Routing
const routes = require('./routes/viajes');
app.use('/api/viajes', routes);

// Connection
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));