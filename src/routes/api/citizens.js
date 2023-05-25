import { Router } from "express"

import CitizenController from "../../controllers/CitizenController.js"
import AuthMiddleware from "../middleware/auth.js"

const router = Router()

router.get("/", AuthMiddleware.authenticateToken(), CitizenController.getAll)
router.get("/:id", AuthMiddleware.authenticateToken(), CitizenController.getOne)

export default router
