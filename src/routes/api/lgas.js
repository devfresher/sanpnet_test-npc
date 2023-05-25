import { Router } from "express"

import LGAController from "../../controllers/LGAController.js"
import AuthMiddleware from "../middleware/auth.js"

const router = Router()

router.get("/", AuthMiddleware.authenticateToken(), LGAController.getAll)
router.get("/:id", AuthMiddleware.authenticateToken(), LGAController.getOne)

export default router
