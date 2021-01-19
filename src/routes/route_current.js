const router = require('express').Router();
const getLocationByCity = require('../controllers/getLocationByCity');
const getCityByIpApi = require('../controllers/getCityByIpApi');
const getIp = require('../controllers/getIp')

router.get('/:city', async (req, res) => {
    const dataIp = await getIp();
    const ip = dataIp.ip;
    const dataIpApi = await getCityByIpApi(ip);
    const city = req.params.city;
    const weatherByCurrent = await getLocationByCity(city);
    try {
        //const obj = {wheather: weatherByCurrent, ip_api: dataIpApi}
       return res.status(200).json(weatherByCurrent);
    } catch (error) {
        return res.status(404).json("Not Found");
    }
})

module.exports = router;