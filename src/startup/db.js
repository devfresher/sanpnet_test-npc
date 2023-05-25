import mongoose from "mongoose"
import { config } from "../utils/config.js"

try {
	mongoose.set("strictQuery", false)
	mongoose.connect(config.DB_URL)
	console.log(`Connected to DB`)
} catch (error) {
	console.log(error)
}

export default mongoose
