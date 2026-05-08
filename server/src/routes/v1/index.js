import e from "express";
import authRouter from "../../auth/routes/auth.route.js";
import { healthCheck } from "../../auth/controllers/healthcheck.controller.js";
import gymRouter from "./gym.routes.js"
const router = e.Router()
router.use('/auth', authRouter)
router.use('/healthckeck', healthCheck)

router.use('/gym', gymRouter)
export default router