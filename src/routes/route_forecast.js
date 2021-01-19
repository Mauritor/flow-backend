const router = require('express').Router();
const getForecastByCity = require('../controllers/getForecastByCity')

router.get('/:city', async (req, res) => {
    const city = req.params.city;
    const forecastByCity = await getForecastByCity(city)
    try {
        return res.status(200).json(forecastByCity);
    } catch (error) {
        return res.status(404).json("Not Found");
    }
})

module.exports = router;