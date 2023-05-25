import StateService from "../services/StateService.js"

export default class StateController {
	static async getAll(req, res, next) {
		const states = await StateService.getMany({}, req.query)
		return next({ status: "success", data: states })
	}

	static async getOne(req, res, next) {
		const { id } = req.params
		const state = await StateService.getOne({ _id: id })
		return next({ status: "success", data: state })
	}
}
