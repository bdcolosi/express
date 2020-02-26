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

router.get('/', (req,res) => {
    const snippet = 'hello world'
    res
    .status(200)
    .send(snippet)
    .end()
});

module.exports = router; 