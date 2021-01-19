const fetch = require("node-fetch");
require('dotenv').config();

const getLocationByCity = async (city) => {
    const key = process.env.KEY_WEATHER;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`;
    const data = await fetch(url);
    const res = await data.json();
    return res
}

module.exports = getLocationByCity;