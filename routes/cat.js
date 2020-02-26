const express = require('express')
router = express.Router();

router.get('/', (req, res) => {
    res
    .status(200)
    .send('meow')
    .end()
});

module.exports = router; 

