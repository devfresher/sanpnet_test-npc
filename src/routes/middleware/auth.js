import jwt from "jsonwebtoken"
import { config } from "../../utils/config.js"
import UserService from "../../services/UserService.js"

export default class AuthMiddleware {
	static authenticateToken() {
		return async (req, res, next) => {
			try {
				const authHeader = req.headers["authorization"]
				const token = authHeader && authHeader.replace(/^Bearer\s+/, "")
				if (!token)
					return next({
						status: "error",
						code: 401,
						message: "Access denied. No auth token provided",
					})

				const decodedToken = jwt.verify(token, config.JWT_PRIVATE_KEY)
				const user = await UserService.getOne({ _id: decodedToken._id })

				if (!user)
					return next({ status: "error", code: 401, message: "Invalid auth token" })

				req.user = decodedToken
				return next()
			} catch (err) {
				if (err.name === "TokenExpiredError") {
					next({ status: "error", code: 401, message: "Auth token expired" })
				}

				next({ status: "error", code: 401, message: "Failed to authenticate token" })
			}
		}
	}
}
