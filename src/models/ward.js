import mongoose from "../startup/db.js"

const wardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lgaId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "LGA",
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

export const Ward = mongoose.model("Ward", wardSchema)
