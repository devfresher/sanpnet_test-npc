import { Router } from "express"

import WardController from "../../controllers/WardController.js"
import AuthMiddleware from "../../middleware/auth.js"

const router = Router()

router.get("/", AuthMiddleware.authenticateToken(), WardController.getAll)
router.get("/:id", AuthMiddleware.authenticateToken(), WardController.getOne)

export default router
