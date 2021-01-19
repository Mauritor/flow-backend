const router = require('express').Router();

router.get('/', (req, res) => { 
    try {
        res.render('index');
    } catch (error) {
        res.send(error)
    }
})

module.exports = router;