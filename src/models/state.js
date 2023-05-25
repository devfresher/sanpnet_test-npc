import mongoose from "../startup/db.js"

const stateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	updatedAt: {
		type: Date,
	},
})

export const State = mongoose.model("State", stateSchema)
