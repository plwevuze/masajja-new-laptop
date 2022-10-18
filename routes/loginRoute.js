const express = require('express');
//instatiate a file that points to the express to access different methods
const router = express.Router();

//creating/writing a route

router.get('/', (req, res) => {
	res.render('login');
});

//post route

router.post('/', (req, res) => {
	console.log(req.body);
	res.send('login Successfull!!!!!');
	// res.redirect('/register/farmerOne');
});

//always the last line in the route files
//exposes the router file to be used in another file
module.exports = router;
