const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const app = express();


//IMP ROUTES
const main = require('./src/routes/route_main');
const v1 = require('./src/routes/route_v1');
const location = require('./src/routes/route_location');
const current = require('./src/routes/route_current');
const forecast = require('./src/routes/route_forecast');

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

//MIDDLEWARES
const corsOptions = {
    origin: '*', // Reemplazar con dominio
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//ROUTES
app.use('/', main);
app.use('/v1', v1);
app.use('/location', location);
//app.use(current, forecast);
app.use('/current', current);
app.use('/forecast', forecast);



//STARTING SERVER
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});

module.exports = app