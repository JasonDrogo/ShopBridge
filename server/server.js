const express = require('express');
const router = require('./routers/router');
const bodyParser =  require('body-parser');

const app = express();

const cors = require('cors');


app.use(bodyParser.json());
app.use(cors());
router(app);
app.listen(3000,() => console.log("Express Server Started"));