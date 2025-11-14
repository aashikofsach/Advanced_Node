const express = require('express');
const bodyParser = require('body-parser')
const { PORT } = require('../config/server.config');

const  routerObj  = require('../routes');

const app = express() ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text())



app.use('/api', routerObj)


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));
