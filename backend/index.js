const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/connectDB');
const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());


const cartRoutes = require('./routes/cartRoutes');

// Routes
app.get('/', (req, res) => {
    res.json({
        message: "Server is running on port " + PORT
    });
});

app.use('/api', routes);

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
}).catch((err) => {
    console.error('Failed to connect to the database', err);
    process.exit(1);
});
