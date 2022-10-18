const express = require('express');
//instatiate a file that points to the express to access different methods
const router = express.Router();

//importing model
const Registration = require('../models/Users');
//creating/writing a route

router.get('/', (req, res) => {
	res.render('agriculturalOfficer');
});

//post route
router.post('/', async (req, res) => {
	console.log(req.body);
	try {
		const user = new Registration(req.body);
		let uniqueExist = await Registration.findOne({userId:req.body.userId});
		let ninExist = await Registration.findOne({nin:req.body.nin});
		let emailExist = await Registration.findOne({email:req.body.email});
		if (uniqueExist){
			return res.status(400).send('Oops!! this number is already taken!!!');
		}else if(ninExist){
			return res.status(400).send('Oops!! this NIN number belongs to another User!!!!');
		}else if(emailExist){
			return res.status(400).send('OOps!! The email entered belongs to a registered account!!!!');
		}
		else{
			await Registration.register(user, req.body.password, (error)=>{
				if(error){
					throw error
				}
				//redirect to login form in future
				res.redirect('/register/agriculturalOfficer');
			});

		}
		await Registration.register(user, req.body.password, (error)=>{
			if(error){
				throw error
			}
			//redirect to login form in future
			res.redirect('/register/agriculturalOfficer');
		});
	} catch (error) {
		res.status(400).send('Sorry something went wrong  while updating system');
		console.log(error);
	}
	// res.send('farmer One Registration Successfull!!!!!');
	// res.redirect('/register/farmerOne');
});


//always the last line in the route files
//exposes the router file to be used in another file
module.exports = router;
