import { Ward } from "../models/ward.js"
import { paginationLabel } from "../utils/pagination.js"

const wardPopulateData = [{ path: "lga" }]
export default class WardService {
	static model = Ward

	static async getOne(filterQuery) {
		const ward = await this.model.findOne(filterQuery).populate(wardPopulateData)
		return ward
	}

	static async getMany(filterQuery, pageFilter) {
		if (!pageFilter || (!pageFilter.page && !pageFilter.limit))
			return await this.model.find(filterQuery).populate(wardPopulateData)

		pageFilter.customLabels = paginationLabel
		pageFilter.populate = wardPopulateData
		return await this.model.paginate(filterQuery, pageFilter)
	}
}
