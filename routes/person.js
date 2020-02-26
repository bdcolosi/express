const express = require('express');
router = express.Router();

// query parameters below name input 

// router.get('/:name?', (req,res) => {
//     console.log ('url parameters are: ', req.params);

//     const {name} = req.params;

//     res 
//     .status(200)
//     .send(`hi ${name}`)
//     .end()
// });

// module.exports = router;

///Url parameters example below

// router.get('/', (req,res) => {
//     console.log('query parameters are: ', req.query);
//     let snippet = 'hello person';

//     if(req.query.name != undefined && req.query.name === 'Brooklyn') {
//         snippet = 'BROOKLYN RULES'
//     }

//     res 
//     .status(200)
//     .send(snippet)
//     .end()
// });

// module.exports = router;


//more exercises below 

router.get('/:year?', (req,res) => {
    const {year} = req.params;

    let age = (2020 - year);

    console.log('url parameters are: ', req.params);

    res 
    .status(200)
    .send(`Your were born in ${age}`)
    .end()
});

module.exports = router;



