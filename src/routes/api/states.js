import { Router } from "express"

import StateController from "../../controllers/StateController.js"
import AuthMiddleware from "../middleware/auth.js"

const router = Router()

router.get("/", AuthMiddleware.authenticateToken(), StateController.getAll)
router.get("/:id", AuthMiddleware.authenticateToken(), StateController.getOne)

export default router
