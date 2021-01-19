const fetch = require("node-fetch");

const getCityByIpApi = async (ip) => {
    const url = `http://ip-api.com/json/${ip}`;
    const data = await fetch(url);
    const res = await data.json();
    return res
    
}

module.exports = getCityByIpApi;