import { Citizen } from "../models/citizen.js"
import { paginationLabel } from "../utils/pagination.js"

const citizenPopulateData = [{ path: "ward" }]
export default class CitizenService {
	static model = Citizen

	static async getOne(filterQuery) {
		const citizen = await this.model.findOne(filterQuery).populate(citizenPopulateData)
		return citizen
	}

	static async getMany(filterQuery, pageFilter) {
		if (!pageFilter || (!pageFilter.page && !pageFilter.limit))
			return await this.model.find(filterQuery).populate(citizenPopulateData)

		pageFilter.customLabels = paginationLabel
		pageFilter.populate = citizenPopulateData
		return await this.model.paginate(filterQuery, pageFilter)
	}
}
