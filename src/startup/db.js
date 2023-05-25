import mongoose from "mongoose"
import winston from "winston"
import { config } from "../utils/config.js"

export const connectDB = () => {
	try {
		mongoose.set("strictQuery", false)
		mongoose.connect(config.DB_URL)
		winston.info(`App is connected to DB`)
	} catch (error) {
		winston.error(error)
	}
}