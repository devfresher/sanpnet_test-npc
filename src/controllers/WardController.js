import WardService from "../services/WardService.js"

export default class WardController {
	static async getAll(req, res, next) {
		const wards = await WardService.getMany({}, req.query)
		return next({ status: "success", data: wards })
	}

	static async getOne(req, res, next) {
		const { id } = req.params
		const ward = await WardService.getOne({ _id: id })
		return next({ status: "success", data: ward })
	}
}
