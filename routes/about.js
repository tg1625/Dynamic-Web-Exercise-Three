const express = require('express');
const router = express.Router();

//get request for 
router.get('/', (req, res) => res.send('About this App!'));
//request for about/me
router.get('/me', (req, res) => res.send('About Me!')); //routes are relative to route set in app.js

//how to export in Express
module.exports = router;