import asyncErrors from "express-async-errors"
import winston from "winston"
import http from "http"

import logger from "./logger.js"
import routeApp from "./routes.js"
import { connectDB } from "./db.js"

import { config } from "../utils/config.js"

export default async (app) => {
	logger()
	routeApp(app)
	connectDB()
    
	const server = http.createServer(app)
	const { PORT, HOST } = config
	return server.listen(PORT, HOST, () => {
		winston.info(`Server started at http://${HOST}:${PORT}`)
	})
}
