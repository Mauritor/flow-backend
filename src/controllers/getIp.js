const fetch = require("node-fetch");

const getIp = async () => {
    const url = `https://api.ipify.org?format=json`;
    const data = await fetch(url);
    const res = await data.json();
    return res
    
}

module.exports = getIp;