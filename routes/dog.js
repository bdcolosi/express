const express = require('express')
router = express.Router()

const data = [
    {name:'Brooke', type:'T-rex'}
];


router.get('/dog', (req,res) => {
    res.render('template', {
        locals:{
            title: 'DOG PAGE!',
            arrayOfData: data
        },
        partials: {
            partial: 'partial-dog'
        }
    })
});

module.exports = router; 