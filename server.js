const express = require('express');
const mongoose = require('mongoose');
const app = express();

const connectionString = 'mongodb://127.0.0.1:27017/user-manager';

// Database
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to Database...'))
    .catch(err => console.error(err));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Controllers
const UserController = require('./controllers/UserController');

// Routes
app.post('/api/user/create', UserController.create);
app.patch('/api/user/update', UserController.update);
app.get('/api/user/retrieve', UserController.retrieve);
app.delete('/api/user/delete', UserController.delete);

// Start Server
app.listen(4000, () => console.log('Server has started on port 4000...'));