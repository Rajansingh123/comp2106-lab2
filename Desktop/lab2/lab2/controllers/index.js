const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index',
        {
            title: 'Rajanpreet Singh',
            message: 'My name is Rajan, I have my mom, dad, brother and my little pug dog in my family, although I am not going to write about my doggy here!'
        });
});



//GET: /AmarjitK
router.get('/AmarjitK', (req, res, next)=> {
    //load the view
    res.render('AmarjitK', {
        title: 'Amarjit Kaur',
        message: 'My mother is a house wife, she was a sports player when she was young, so do I ;)'
    });

});




//GET: /BaldevS
router.get('/BaldevS', (req, res, next)=> {
    //load the view
    res.render('BaldevS', {
        title: 'Baldev Singh',
        message: 'My father is a doctor, he have his own clinic in India, he always encourages me to work and nver give up on my dreams'    });

});




//GET: /AnmolS
router.get('/AnmolS', (req, res, next)=> {
    //load the view
    res.render('AnmolS', {
        title: 'Anmol Singh',
        message: 'Anmol is my elder brother,he is doing bachelors in commerce, he have always been my bestfriend and have always been available for me'
    });

});
module.exports = router;
