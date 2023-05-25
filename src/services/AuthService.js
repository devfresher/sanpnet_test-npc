import bcrypt from "bcryptjs"
import UserService from "./UserService.js"

export default class AuthService {
	static async signIn(email, password, userType) {
		const user = await UserService.getOne({ email }, false)

		if (!user)
			throw { status: "error", code: 401, message: "Invalid email address or password" }

		const isValidPassword = await bcrypt.compare(password, user.password)
		if (!isValidPassword)
			throw { status: "error", code: 401, message: "Invalid email address or password" }

		const accessToken = await UserService.generateAuthToken(user)

		return { user, accessToken }
	}
}
