//import express from 'express';

const express = require('express');
const app = express();
const port = 8080;
app.use(express.static('public'));

app.use(express.json()); // lets you handle JSON input

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(process.env.PORT || port, () => console.log(`Example app listening at http://localhost:${port}`));
