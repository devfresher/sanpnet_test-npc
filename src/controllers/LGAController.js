import LGAService from "../services/LGAService.js"

export default class LGAController {
	static async getAll(req, res, next) {
		const lgas = await LGAService.getMany({}, req.query)
		return next({ status: "success", data: lgas })
	}

	static async getOne(req, res, next) {
		const { id } = req.params
		const lga = await LGAService.getOne({ _id: id })
		return next({ status: "success", data: lga })
	}
}
