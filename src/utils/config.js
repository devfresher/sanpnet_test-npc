import dotenv from "dotenv"
const env = !process.env.NODE_ENV ? "development" : process.env.NODE_ENV
dotenv.config({ path: `.env.${env}` })

export const config = {
	HOST: process.env.HOST,
	PORT: process.env.PORT,
	DB_URL: process.env.DB_URL,
}
