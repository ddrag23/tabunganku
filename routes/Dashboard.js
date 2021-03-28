import express from 'express'
import {index} from '../controller/DashboardController.js'

const router = express.Router()
router.get('/', index)

export default router

