import mongoose from "../startup/db.js"

const citizenSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	gender: {
		type: String,
		enum: ["Male", "Female"],
		required: true,
	},
	address: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	wardId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Ward",
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

export const Citizen = mongoose.model("Citizen", citizenSchema)
