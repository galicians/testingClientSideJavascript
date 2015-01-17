var express = require('express')
var app = express()
var path = require('path')
var time = require('time')
var http = require('http')


app.set('views', __dirname + '/app');
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)
app.use(express.static(path.join(__dirname + '/app')));

app.use(function(req, res, next) {
  var now = new time.Date()
  console.log(now.toString() + ", on express server");
  next();
})


var server = http.createServer(app)


app.get('/', function(req, res) {
  console.log("get request to / in server")
  res.render('index.html')
})


server.listen(3000, function() {
  console.log('Im an express server listening at port 3000')
  console.log('visit http://localhost:3000/')
})
