require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Recipe Database'));

app.use(express.json());

const recipesRouter = require('./controllers/controller-recipe');
app.use('/recipes', recipesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}!`));
