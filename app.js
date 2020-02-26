//MAIN DIRECTORY 

//import express library
const express = require('express');
//importing temple engine below
es6Renderer = require('express-es6-template-engine');
// in order to have the methods of express, we have to run the appication below.
const app = express(); 

app.engine('html',es6Renderer);
app.set('views', 'views');
app.set('view engine','html');

// first argument is a port. 3000 and up is safe. 
app.listen(3355, () => {
    console.log('Server running on port 3333')
});

//route route, arguments are '/' and a function with arguments request andresponse 
// app.get('/', (request,response)=> {
//     const snippet = '<h1> Happy Birthday Alan and Josh!</h1>';
//     response
//     .status(200)
//     .send(snippet)
//     .end()
// });

// respond with this status 200, we are sending the snippet, and then we are ending with end or else the browser will think we are still sending

// router controller demo below, importing routes from cat.js,dog.js,index.js

//importing from the routes export 
const rootController = require('./routes/index'),
catController = require('./routes/cat'),
dogController = require('./routes/dog'),
fooController = require('./routes/foo')
personController = require('./routes/person');

//telling app to use routes 
app.use('/',rootController);
app.use('/', catController);
app.use('/', dogController);
app.use('/', fooController);
app.use('/person', personController);