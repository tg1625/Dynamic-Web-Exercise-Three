const express = require('express') //using express
const app = express() //making an app
const port = 4000 //setting a port

/*-- Importing routing files --*/
const indexRoute = require('./routes/index.js'); //like an IMPORT in react
const aboutRoute = require('./routes/about.js');

/*---- Serve Static Files ------*/
// app.use(express.static('public'))
app.use('/static', express.static('public'))  //this creates a virtual path, so images would be static/images instead of just images 

/* ---- Routing in Express ----*/
//format --> app('route', callback function)
app.use('/', indexRoute)
app.use('/about', aboutRoute)


app.listen(port, () => console.log(`Hello World running on port ${port}!`))

