const express = require('express')
router = express.Router()

router.get('/', (req,res) => {
    res
    .status(200)
    .send('woof')
    .end()
});

module.exports = router; 