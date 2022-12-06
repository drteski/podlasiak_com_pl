require('dotenv').config();

const mongoose = require('mongoose');
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const handlebars = require('express-handlebars');
const session = require('express-session');
const MongoDBStore = require('express-mongodb-session')(session);

const indexRouter = require('./routes/index');
const mailerRouter = require('./routes/mail');

const app = express();
// DB setup

mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	serverSelectionTimeoutMS: 10000,
});
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('connected to db'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Session setup

const Session = new MongoDBStore({
	uri: process.env.DATABASE_URL,
	collection: 'session',
});

const oneDay = 1000 * 60 * 60 * 24;

app.use(
	session({
		secret: process.env.SECRET,
		saveUninitialized: true,
		cookie: { maxAge: oneDay },
		resave: false,
		store: Session,
	})
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');
app.engine(
	'.hbs',
	handlebars.engine({
		extname: '.hbs',
		defaultLayout: 'main',
		layoutsDir: __dirname + '/views/layouts',
		partialsDir: __dirname + '/views/partials',
		runtimeOptions: {
			allowProtoPropertiesByDefault: true,
			allowProtoMethodsByDefault: true,
		},
	})
);

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/send', mailerRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
