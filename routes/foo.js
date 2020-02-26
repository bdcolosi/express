const express = require('express')
router = express.Router();

const data = [
    {name:'Onyx Bub', type:'Small Bear'}
];

router.get('/foo', (req, res) => {
        res.render('template', {
            locals: {
                title: 'Onyx is a big boi',
                arrayOfData: data
            },
            partials: {
                partial: 'partial-foo'
            }
        })
    });

module.exports = router; 
