import { State } from "../models/state.js"
import { paginationLabel } from "../utils/pagination.js"

export default class StateService {
	static model = State

	static async getOne(filterQuery) {
		const state = await this.model.findOne(filterQuery)
		return state
	}

	static async getMany(filterQuery, pageFilter) {
		if (!pageFilter || (!pageFilter.page && !pageFilter.limit))
			return await this.model.find(filterQuery)

		pageFilter.customLabels = paginationLabel
		return await this.model.paginate(filterQuery, pageFilter)
	}
}
