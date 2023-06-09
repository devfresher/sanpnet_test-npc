import bcrypt from "bcryptjs"
import { connectDB } from "../src/startup/db.js"
import logger from "../src/startup/logger.js"

logger()
connectDB()

import { LGA } from "../src/models/lga.js"
import { State } from "../src/models/state.js"
import { Ward } from "../src/models/ward.js"
import { Citizen } from "../src/models/citizen.js"
import { User } from "../src/models/user.js"

async function createRecords() {
	try {
		// Create 10 states
		const states = []
		for (let i = 0; i < 10; i++) {
			const state = new State({ name: `State ${i + 1}` })
			states.push(state)
		}
		await State.insertMany(states)

		// Create 10 LGAs for each state
		const lgas = []
		for (let i = 0; i < 10; i++) {
			for (let j = 0; j < 10; j++) {
				const lga = new LGA({ name: `LGA ${j + 1}`, state: states[i]._id })
				lgas.push(lga)
			}
		}
		await LGA.insertMany(lgas)

		// // Create 10 wards for each LGA
		const wards = []
		for (let i = 0; i < 100; i++) {
			for (let j = 0; j < 10; j++) {
				const ward = new Ward({ name: `Ward ${j + 1}`, lga: lgas[i]._id })
				wards.push(ward)
			}
		}
		await Ward.insertMany(wards)

		// // Create 10 citizens for each ward
		const citizens = []
		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 10; j++) {
				const citizen = new Citizen({
					fullName: `Citizen ${j + 1}`,
					gender: j % 2 === 0 ? "Male" : "Female",
					address: `Address ${j + 1}`,
					phone: `Phone ${j + 1}`,
					ward: wards[i]._id,
				})
				citizens.push(citizen)
			}
		}
		await Citizen.insertMany(citizens)

		// Create 10 users
		const users = []
		for (let i = 0; i < 10; i++) {
			const hashedPassword = await hashPassword("Default123")

			const user = new User({
				name: `User ${i + 1}`,
				email: `user${i + 1}@testmail.com`,
				password: hashedPassword,
			})
			users.push(user)
		}
		await User.insertMany(users)

		console.log("Migration completed")
	} catch (error) {
		console.error("Error running migration:", error)
	}
}

async function hashPassword(password) {
	try {
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)
		return hashedPassword
	} catch (error) {
		console.error("Error hashing password:", error)
	}
}

await createRecords()
