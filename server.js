var cookieParser = require('cookie-parser');
var session = require('express-session');
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');


var app = express();

//allow sessions
app.use(session({secret: 'app', cookie: { maxAge: 60000}}));
app.use(cookieParser());

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

//this allows me to use handlebars
app.use(methodOverride('_method'))

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var profileRoutes = require('./controllers/calender.js');

app.use('/', profileRoutes);
app.use('/search',profileRoutes)

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
