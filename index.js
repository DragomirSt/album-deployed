
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

const dataBase = require('./config/dataBase');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

const { verifyToken } = require('./middlewares/authMiddleware');
const router = require('./routes');

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(cors());
app.use(express.json());
app.use(verifyToken);
app.use(router);

dataBase()
    .then(() => {
        app.listen(PORT);
    })
    .catch(err => {
        console.log('Cannot connect to the server.');
    });