import { LGA } from "../models/lga.js"
import { paginationLabel } from "../utils/pagination.js"

const lgaPopulateData = [{ path: "state" }]
export default class LGAService {
	static model = LGA

	static async getOne(filterQuery) {
		const lga = await this.model.findOne(filterQuery).populate(lgaPopulateData)
		return lga
	}

	static async getMany(filterQuery, pageFilter) {
		if (!pageFilter || (!pageFilter.page && !pageFilter.limit))
			return await this.model.find(filterQuery).populate(lgaPopulateData)

		pageFilter.customLabels = paginationLabel
		pageFilter.populate = lgaPopulateData
		return await this.model.paginate(filterQuery, pageFilter)
	}
}
