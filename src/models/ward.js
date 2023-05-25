import mongoose from "mongoose"
import paginate from "mongoose-paginate-v2"

const wardSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lga: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Lga",
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

wardSchema.plugin(paginate)
export const Ward = mongoose.model("Ward", wardSchema)
