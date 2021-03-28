import express from 'express'
import * as UserController from '../controller/UserController.js'

const router = express.Router()

router.get('/', UserController.index)

router.post('/simpan', UserController.store)
router.put('/update/:id', UserController.update)

export default router

