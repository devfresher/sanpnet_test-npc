import { Router } from "express"

import AuthController from "../../controllers/AuthController.js"
import ValidationMiddleware from "../../middleware/validate.js"

const router = Router()

router.post(
	"/login",
	ValidationMiddleware.validateRequest(AuthController.validateSignIn),
	AuthController.signIn
)
export default router
