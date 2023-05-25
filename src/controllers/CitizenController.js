import CitizenService from "../services/CitizenService.js"

export default class CitizenController {
	static async getAll(req, res, next) {
		const citizens = await CitizenService.getMany({}, req.query)
		return next({ status: "success", data: citizens })
	}

	static async getOne(req, res, next) {
		const { id } = req.params
		const citizen = await CitizenService.getOne({ _id: id })
		return next({ status: "success", data: citizen })
	}
}
