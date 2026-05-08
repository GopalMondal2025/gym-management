import {
  login,
  logout,
  registerUser,
  verifyEmail,
  getCurrentUser,
  forgotPasswordRequest,
  resetForgotPassword,
  changePassword,
  refreshAccessToken,
  resendEmailVerification,
} from '../controllers/auth.controller.js'
import { Router } from 'express'
import { validate } from '../middlewares/validator.middleware.js'
import {
  userRegisterValidator,
  userLoginValidator,
  userForgotPasswordValidator,
  userResetForgotPasswordValidator,
  changePasswordValidator,
} from '../validators/index.js'
import { verifyJWT } from '../middlewares/auth.middleware.js'

const router = Router()

// unsecured routes
router.route('/register').post(userRegisterValidator(), validate, registerUser)
router.route('/login').post(userLoginValidator(), validate, login)
router.route('/verify-email/:verificationToken').get(verifyEmail)
router
  .route('/forgot-password')
  .post(userForgotPasswordValidator(), validate, forgotPasswordRequest)
router
  .route('/reset-password/:resetToken')
  .post(userResetForgotPasswordValidator(), validate, resetForgotPassword)

router.route('/refresh-token').post(refreshAccessToken)

// secure routes
router.route('/logout').post(verifyJWT, logout)
router.route('/current-user').get(verifyJWT, getCurrentUser)
router
  .route('/change-password')
  .post(verifyJWT, changePasswordValidator(), validate, changePassword)
router.route('/resend-email-verification').post(verifyJWT, resendEmailVerification)

export default router
