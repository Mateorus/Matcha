const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const User = require('../models/User');
const keys = require('../config/keys');

router.post('/signup', async (req, res) => {

	let login = await validateLogin(req.body.login);
	if (!login)
		return res.status(401).send();

	if (!/^[a-zA-Z0-9]{3,20}$/i.test(login))
		return res.status(401).send();		
	
	let name = req.body.name;
	if (!/^[a-zA-Z]{2,20}$/i.test(name))
		return res.status(401).send();		

	let lastName = req.body.lastName;
	if (!/^[a-zA-Z]{2,20}$/i.test(lastName))
		return res.status(401).send();		

	let email = await validateEmail(req.body.email);
	if (!email)
		return res.status(401).send();
		
	if (!/.+@.+\..+/i.test(email))
		return res.status(401).send();		

	let password = req.body.password;
	if (!/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))/.test(password))
		return res.status(401).send();				

	bcrypt.hash(password, 10, function(err, hash) {
			
			if (err) 
				return res.status(500).send();
			
			let newUser = new User({ login, name, lastName, email, password: hash });

			newUser.save()
				.then(() => res.json({ email: email }))
				.catch(() =>  res.status(500).send())
		})
});

router.post('/validate-login', async (req, res) => {
	 
	console.log(req.body);
	let login = await validateLogin(req.body.login);
	login ? res.json({ success: true, msg: '' }) :
					res.json({ success: false, msg: `Login ${req.body.login} is already in use!`});
});

router.post('/validate-email', async (req, res) => {
	 
	let email = await validateEmail(req.body.email);
	email ? res.json({ success: true, msg: '' }) :
					res.json({ success: false, msg: `Email ${req.body.email} is already in use!` });
});

router.post('/sign-in', async (req, res) => {

	let user = await User.findByLogin(req.body.login);
	
	if (!user) 
		return denyAccess(res);

	let match =	await bcrypt.compare(req.body.password, user.password)
		 
	if (!match)
		 	return denyAccess(res);
	
	//let token = jwt.sign({data: 'text', exp: Math.floor(Date.now() / 1000) + 1}, 'test');

	
	res.json(user);
})
module.exports = router;

async function validateLogin(login) {
	let user = await User.findByLogin(login);
	return user ? null : login.charAt(0).toUpperCase() + login.slice(1);
};

async function validateEmail(email) {
	let user = await User.findByEmail(email);
	return user.length ? null : email.toLowerCase();
};

function denyAccess(res) {
	res.status(401).send();
}