import mongoose from "mongoose"
import paginate from "mongoose-paginate-v2"

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

stateSchema.plugin(paginate)
export const State = mongoose.model("State", stateSchema)
