import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import { User } from "../models/user.js"
import { config } from "../utils/config.js"

const sensitiveData = "-password -resetPasswordToken -resetTokenExpiry"

export default class UserService {
	static model = User

	static async getOne(filterQuery, sensitive = true) {
		const projection = sensitive ? sensitiveData : ""
		const user = await this.model.findOne(filterQuery, projection)

		return user
	}

	static async getMany(filterQuery, pageFilter, sensitive = true) {
		const projection = sensitive ? sensitiveData : ""
		return await this.model.find(filterQuery, projection)
	}

	static async generateAuthToken(user) {
		const expiry = 5 * 60 * 1000 // 5 minutes of token expiry
		try {
			const token = jwt.sign(
				{
					_id: user._id,
				},
				config.JWT_PRIVATE_KEY,
				{ expiresIn: expiry }
			)
			return { token, expiresAt: new Date(Date.now() + expiry) }
		} catch (ex) {
			throw { code: 500, message: "Failed to generate auth token.", exception: ex }
		}
	}

	static async hashPassword(password) {
		try {
			const salt = await bcrypt.genSalt(10)
			const hashedPassword = await bcrypt.hash(password, salt)
			return hashedPassword
		} catch (ex) {
			throw { code: 500, message: "Failed to hash password.", exception: ex }
		}
	}
}
