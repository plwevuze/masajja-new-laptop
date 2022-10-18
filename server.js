//#############*******Dependencies********##############
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/db');
const passport = require('passport');

//express session
//express sesssion
const expressSession = require('express-session')({
	secret: 'secret',
	resave: false,
	saveUninitialized: false,
});

//##########*******importing route files********############
const registerAORoutes = require('./routes/registerRoutes');

//##########*******Instantiations********############
const app = express();

//##########*****setup database connections****##########

mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;

// Check connection
db.once('open', function () {
	// message for connection to mongo db
	console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function (err) {
	console.error(err);
});

//##########********Configurations********############
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// app.set('views', (__dirname, './views'));

//###########*******Middleware******##############

app.use(express.urlencoded({ extended: false }));
//for static images
app.use(express.static(path.join(__dirname, 'public')));
//for dynamic images...those for uploads
app.use('/public/images', express.static(__dirname + '/public/uploads'));
app.use(expressSession);

//passport configuration middleware
app.use(passport.initialize());
app.use(passport.session());

//###############***********Routes**********#############
app.use('', registerAORoutes);

// For invalid routes
app.get('*', (req, res) => {
	res.send('404! This is an invalid URL...Page not found!!!!!');
});

//this hud always be tha lastest line in the index.js file
//our application is going to be running on the port number 3000
app.listen(3000, () => console.log('listening on port 3000'));
