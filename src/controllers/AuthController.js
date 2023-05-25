import { Joi } from "../utils/joi.js"
import AuthService from "../services/AuthService.js"

export default class AuthController {
	static async signIn(req, res, next) {
		const { email, password } = req.body
		const signInData = await AuthService.signIn(email, password)

		return next({ status: "success", data: signInData })
	}

	static validateSignIn(req) {
		const validationSchema = Joi.object({
			email: Joi.string().email().required().trim().lowercase().messages({
				"string.email": "Email must be a valid email address",
				"string.empty": "Email is required",
			}),
			password: Joi.string().required().trim().messages({
				"string.empty": "Password is required",
			}),
		})

		return validationSchema.validate(req.body, { abortEarly: false })
	}
}
