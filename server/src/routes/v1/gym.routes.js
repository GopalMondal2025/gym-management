import e from "express";
import {register} from "../../controllers/gym.controller.js";
const router=e.Router({mergeParams:true});

router.get('/register', register)
export default router