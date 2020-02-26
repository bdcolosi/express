const express = require('express')
router = express.Router();

const data = [
    {name:'Shadow Boi', type:'Panther'}
];

router.get('/cat', (req, res) => {
        res.render('template', {
            locals: {
                title: 'CAT PAGE!!',
                arrayOfData: data
            },
            partials: {
                partial: 'partial-cat'
            }
        })
    });

module.exports = router; 

