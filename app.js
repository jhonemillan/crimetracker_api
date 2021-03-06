var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var session = require('express-session');
var authRouter = require('./routes/auth')(passport);
var usersRouter = require('./routes/users');
var mapRouter = require('./routes/map');
var helmet = require('helmet');
var http = require('http');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser());
app.use(helmet());
app.use( session({
  secret : 's3Cur3',
  name : 'sessionId',
 })
);
var mongoose = require('./config/db');
let auth = require('./config/passport');
auth(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use('/auth', authRouter);
app.use('/map', mapRouter);

//test hrk

app.use(express.static(path.join(__dirname, '/public/osmreport')));


app.get('/favicon.ico', (req, res) => res.status(204));

var port = (process.env.PORT || '3000');
app.set('port', port);

app.get('/*', function(req,res) {
    
    res.sendFile(path.join(__dirname,'/public/osmreport/index.html'));
    });
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  
});

const server = http.createServer(app);

server.listen(port,()=>{
    console.log('runnig');
});



module.exports = app;
