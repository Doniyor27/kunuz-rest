import model from './model.js'
import JWT from '../../lib/jwt.js'

const registerController = async (req, res) => {
	try {
		let user = model.register(req.body)
		if(await user) {
			res.status(201).json({
				status: 201,
				message: 'The user succesfully registered!',
				token: JWT.sign({ password: req.body.password })
			})
		} else {
			res.status(404).json({
                status: 404,
                message: 'Somethinks went wrong !'
            })
		}
	} catch (error) {
		console.log(error)
	}
}

const loginController = (req, res) => {
	try {
		res.status(200).json({
			status: 200,
			message: "The user succesfully logged in!",
			token: JWT.sign({ password: req.body.password })
		})
	} catch(error) {
		console.log(error)
	}
	
}

export {
	registerController,
	loginController
}