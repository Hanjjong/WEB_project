const express = require('express')
const app = express
const mysql = require('mysql')
const bodyParser = require('body-parser')
var router = express.Router()

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '패스워드',
    database: 'user',
    port: '3307',
  });

  app.use(bodyParser.urlencoded({
    extended: false,
  }));
  
  app.listen(3307, () => {
    console.log('Server is running port 3307!');
    // 데이터베이스 연결
    connection.connect();
  });
  
 
  app.set('view engine', 'ejs')
  app.use(express.json())
  app.use(express.urlencoded({extended:true}))

  app.get('/', function(req, res){
    res.render('mainpage.ejs');//res.sendFile(__dirname+'/~.html)
});
