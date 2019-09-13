require('dotenv').config();

const express = require('express');

const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Recipe Database'));

app.use(express.json());

app.use(express.static(__dirname));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, PATCH');
  next();
});

const recipesRouter = require('./controllers/controller-recipe');

app.use('/api/recipe', recipesRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));
