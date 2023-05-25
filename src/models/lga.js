import mongoose from "../startup/db.js"

const lgaSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	stateId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "State",
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

export const LGA = mongoose.model("Lga", lgaSchema)
