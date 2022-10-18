const express = require('express');
//instatiate a file that points to the express to access different methods
const router = express.Router();


//creating/writing a route
router.get('/', (req, res) => {
	res.render('agriculturalOffcer');
});
router.get('/', (req, res) => {
    res.render('farmerOne')
});
router.get('/', (req, res) => {
	res.render('urbanFarmer');
});



//post route
router.post('/', (req, res) => {
	console.log(req.body);
	res.send('farmer One Registration Successfull!!!!!');
	// res.redirect('/register/farmerOne');
});
router.post('/', (req, res) => {
	console.log(req.body);
	res.send('Urban Farmer Registration Successfull!!!!!');
	// res.redirect('/register/farmerOne');
});




//always the last line in the route files
//exposes the router file to be used in another file
module.exports = router;