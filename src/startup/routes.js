import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"

import apiAuthRouter from "../routes/api/auth.js"
import apiStateRouter from "../routes/api/states.js"
import apiLgaRouter from "../routes/api/lgas.js"
import apiWardRouter from "../routes/api/wards.js"

import ResponseMiddleware from "../middleware/response.js"

const routeApp = function (app) {
	app.use(bodyParser.json())
	app.use(cors())
	app.use(helmet())

	// API Routes
	app.use("/api/auth", apiAuthRouter)
	app.use("/api/states", apiStateRouter)
    app.use("/api/lgas", apiLgaRouter)
    app.use("/api/wards", apiWardRouter)

	// Web Routes
	// app.use("/login", authRouter)

	app.all("*", (req, res, next) => {
		next({
			status: "error",
			code: 404,
			message: `You missed the road. Can not ${req.method} ${req.originalUrl} on this server `,
		})
	})
	app.use(ResponseMiddleware.response)
}

export default routeApp
