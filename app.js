const express = require('express') //using express
const app = express() //making an app
const port = 4000 //setting a port

//using static files ie images
app.use(express.static('public'))
//app.use('/static', express.static('public'))
    //this creates a virtual path, so images would be static/images instead of just images 

//default GET for the index page
app.get('/', (req, res) => res.send('Hello World!<br/> <img src="/images/cactus.jpg" width="500px">')) //public is NOT in the path, express already knows 

//GET for the about page
app.get('/about', (req,res) => res.send('About Page!'))

//GET for about me 
app.get('/about/me', (req,res) => res.send("About me!"));


app.listen(port, () => console.log(`Hello World running on port ${port}!`))

