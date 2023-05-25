import http from "http"

// import routeApp from "./routes.js"
import { connectDB } from "./db.js"

import { config } from "../utils/config.js"

export default async (app) => {
	const server = http.createServer(app)

	// routeApp(app)
	connectDB()

	const { PORT, HOST } = config
	return server.listen(PORT, HOST, () => {
		winston.info(`Server started at http://${HOST}:${PORT}`)
	})
}
