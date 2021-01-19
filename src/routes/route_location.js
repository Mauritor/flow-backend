const router = require('express').Router();
const getCityByIpApi= require('../controllers/getCityByIpApi');

router.post('/', async (req, res) => {
    const ip = req.body.ip;
    console.log(ip);
    const dataLocation = await getCityByIpApi(ip);
    try {
        res.status(200).json(dataLocation);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports = router;