var mysql = require('mysql')

const express = require('express')
const server = express()
server.use(express.json())

const port = 8080


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: 'Pedro@123',
    database: "aulaPedro"
});

module.exports= {port, con, server}