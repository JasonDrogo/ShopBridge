const mysql = require('mysql');
const {config} = require("../config.env");
const connection = mysql.createConnection(config);

module.exports ={ connection};