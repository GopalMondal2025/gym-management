import e from 'express'
import {
  getAllEquipment,
  createEquipment,
  updateEquipment,
  deleteEquipment,
} from '../../controllers/equipment.controller.js'
const router = e.Router({ mergeParams: true })
router.route('/').get(getAllEquipment).post(createEquipment)
router.route('/:equipment_id').put(updateEquipment).delete(deleteEquipment)
export default router
