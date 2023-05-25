import mongoose from "mongoose"
import paginate from "mongoose-paginate-v2"

const lgaSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	state: {
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

lgaSchema.plugin(paginate)
export const LGA = mongoose.model("Lga", lgaSchema)
