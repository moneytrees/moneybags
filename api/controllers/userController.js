const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require(__basedir + "config/keys");
const passport = require("passport");
require("dotenv").config();

//-------------- MODELS -------------------
const User = require(__basedir + "db/models/user");
const Achv = require(__basedir + "db/models/achieve");
//------------- VALIDATION ----------------
const validateRegisterInput = require(__basedir +
	"helpers/validation/register");
const validateLoginInput = require(__basedir + "helpers/validation/login");

module.exports = {


	addCashFlow: (req, res) => {
		User.findOne({ email: req.body.email })
			.then((user) => {

				if (user.cashFlowArray) {
					if ((Math.abs(Date.now() - user.lastCashFlow) / 60000) > 0.1 && user.canAddCashFlow) {


						let newCashFlowArray = user.cashFlowArray;

						newCashFlowArray.push(req.body.cashFlow);

						User.updateOne({ email: req.body.email }, { cashFlowArray: newCashFlowArray, lastCashFlow: Date.now(), canAddCashFlow: false }).then((data) => {
							return res.json(data);
						});
					}
					else {
						return res.json("Under 24 hours");
					}
				}
			}).catch(err => err);


	},


	getLatestCashFlow: (req, res) => {

		console.log("get latest cash flow");
		
		User.findOne({ email: req.body.email }).then((user) => {

			console.log(user.cashFlowArray);

			if (user.cashFlowArray.length > 0) {

				res.json(user.cashFlowArray[(user.cashFlowArray.length - 1)]);
			}
			else {
				res.json("neutral");
			}

		}).catch(err => err);

	},

	deleteNewAchievements: (req, res) => {

		User.updateOne({ email: req.body.email }, { newAchv: [] }).then((data) => {
			res.json(data);
		}).catch(err => err);

	},

	getNewAchievements: (req, res) => {

		User.findOne({ email: req.body.email }).then(user => {
			res.json(user.newAchv);

		}).catch(err => err);
	},

	registerUser: (req, res) => {
		const { errors, isValid } = validateRegisterInput(req.body);
		console.log(`error on register handler `, { errors });
		// If input is invalid set header status code to 400 && send errors obj
		if (!isValid)
			return res.status(400).json(errors);
		User.findOne({ email: req.body.email }).then(user => {
			// If user : email already exists...
			if (user) {
				// Create email property on errors obj
				errors.email = "Email already exists.";
				// Set header status to 400 (server error)
				// Send error object as json
				return res.status(400).json({ error: errors });
			} else {
				console.log("user found");
				// Create new User from model
				// Set respective properties on user to user's input from body of post
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password
				});

				// Instantiate bcrypt obj
				// Run genSalt method of bcrypt (Creates a random string of characters = #, callback)
				bcrypt.genSalt(10, (err, salt) => {
					console.log("salt generated for new user:");
					if (err) throw err;

					// Run hash method of bcrypt
					//  - Hash: takes passed string and replaces it with the generated salt while maintaining integrity of initial string
					//  - (string to be hashed, generated salt to pass to string, callback)
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						console.log(newUser);
						if (err) throw err;

						newUser.password = hash;

						// Save new user to db then send it as a json
						newUser
							.save()
							.then(user => res.json({ id: user._id, success: `Welcome, ${user.name}! You have registered successfully.` }))
							.catch(err => res.json({ error: err.message }));
					});
				});
			}
		}).catch(err => err);
	},
	loginUser: (req, res) => {

		const { errors, isValid } = validateLoginInput(req.body);

		// If input is invalid set header status code to 400 && send errors obj
		if (!isValid) {
			console.log("LOGIN IS INVALID");
			throw res.status(400).json(errors);
		} else {
			console.log("Fetching user information...");
			// Set email and password to user input from form
			const email = req.body.email;
			const password = req.body.password;


			// Find one user by their email
			User.findOne({ email })
				.then(user => {

					// Check if user exists
					// If not set status to 404 && send errors object
					if (!user) {
						errors.email = "User not found.. Double check your email";
						return res.status(404).json(errors);
					}                    // Compare user created password to hashed password
					bcrypt.compare(password, user.password).then(isMatch => {

						// If hashed password matches user created password
						if (isMatch) {
							// Create JWT payload

							/***** GAMIFICATION CHANGES ****/
							let newConsecutiveLogin = user.consecutive_login + 1;

							User.updateOne({ email: user.email }, { consecutive_login: newConsecutiveLogin, canAddCashFlow: true }).then((data) => {

								console.log("Updated consecutive login");
							}).catch(err => JSON.stringify(err));

							let achvArr = user.achievements;
							let newAchvArr = user.newAchv;



							let cashAchvID = "";


							let cashFlowAchvNum = -1;


							for (let i = (user.cashFlowArray.length - 1); i >= 0; i--) {

								if (user.cashFlowArray[i] === "positive") {
									cashFlowAchvNum++;
								}
								else {
									break;
								}

							}




							cashAchvID = "positiveCashFlow" + cashFlowAchvNum;



							let achvID = "userlogin" + Math.floor(newConsecutiveLogin / 2);


							if ((Math.floor(newConsecutiveLogin / 2) > 0 && Math.floor(newConsecutiveLogin / 2) < 6 && !achvArr.includes(achvID)) && (cashFlowAchvNum > 0 && cashFlowAchvNum < 6 && !user.achievements.includes(cashAchvID))) {


								Achv.findOne({ _id: achvID }).then((achvData) => {

									achvArr.push(achvData._id);
									newAchvArr.push(achvData);
									Achv.findOne({ _id: cashAchvID }).then((cashAchvData) => {




										achvArr.push(cashAchvData._id);
										newAchvArr.push(cashAchvData);


										User.updateOne({ email: user.email }, {
											achievements: achvArr,
											newAchv: newAchvArr
										}).then((data) => {

											console.log(data);
										}).catch(err => JSON.stringify(err));

									}).catch(err => JSON.stringify(err));


								}).catch(err => JSON.stringify(err));
							}
							else if (Math.floor(newConsecutiveLogin / 2) > 0 && Math.floor(newConsecutiveLogin / 2) < 6 && !achvArr.includes(achvID)) {

								Achv.findOne({ _id: achvID }).then((achvData) => {

									achvArr.push(achvData._id);
									newAchvArr.push(achvData);

									User.updateOne({ email: user.email }, {
										achievements: achvArr,
										newAchv: newAchvArr
									}).then((data) => {

										console.log(data);
									});

								}).catch(err => JSON.stringify(err));

							}
							else if (cashFlowAchvNum > 0 && cashFlowAchvNum < 6 && !user.achievements.includes(cashAchvID)) {


								Achv.findOne({ _id: cashAchvID }).then((cashAchvData) => {




									achvArr.push(cashAchvData._id);
									newAchvArr.push(cashAchvData);


									User.updateOne({ email: user.email }, {
										achievements: achvArr,
										newAchv: newAchvArr
									}).then((data) => {

										console.log(data);
									});

								}).catch(err => JSON.stringify(err));
							}


							const payload = {
								id: user._id,
								name: user.name,
								email: user.email,
								achievements: user.achievements,
								institutions: user.institutions
							};

							/***** END GAMIFICATION CHANGES ****/

							// Assign token
							jwt.sign(

								payload,
								keys.secretOrKey,
								{ expiresIn: 1800 }, // Token expires in 30 minutes
								(err, token) => {
									res.json({
										success: true,
										token: `${token}`,
										user: payload
									});
								}
							);
						} else {
							return res.status(400).json({ password: "Password incorrect" });
						}

					});
				}).catch(err => res.send(err));
		}
	},
	currentUser: (req, res) => {
		res.json({
			id: req.user._id,
			name: req.user.name,
			email: req.user.email,
			achievements: req.user.achievements,
			institutions: req.user.institutions
		});
	}
};
