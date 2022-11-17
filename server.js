const express = require('express')
const app = express();
const mysql = require('mysql')
const bodyParser = require('body-parser')
var router = express.Router()
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/'));
app.use('/', router)
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
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
  
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', function(req, res){
  res.render('mainpage.ejs');//res.sendFile(__dirname+'/~.html')
});

app.get('/login', function(req, res){
  res.render('login.ejs')
});
app.get('/mypage', function(req, res){
  res.render('mypage.ejs');
});
app.get('/regist', function(req, res){
  res.render('regist.ejs');
});
app.get('/template', function(req, res){
  res.render('template.ejs');
});


app.get('/notice_list.html', function(req, res){
  res.sendFile(__dirname+'/views/notice_list.html');
});
/*
app.get('/notice_list.html', function(req, res){
  res.render('notice_list.html');
});*/

//html은 sendfile ejs는 render