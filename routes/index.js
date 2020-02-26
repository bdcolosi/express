const express = require('express'),
router = express.Router();

// const rootController = (req,res) => {
//     const snippet = 'Hello World';
//     res 
//     .status(200)
//     .send(snippet)
//     .end()
// }
/*Changing the routing format; every route kicks off a function thats what route method does. 
 refactured code to break things down into smaller chunks. 
 */

router.get('/index', (req,res) => {
    res.render('template', {
        locals:{
            title: 'Hello World'
        },
        partials: {
            partial: 'partial-index'
        }
    })
});

module.exports = router; 