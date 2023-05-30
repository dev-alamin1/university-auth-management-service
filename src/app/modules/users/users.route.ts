import express from 'express'
import controller from './users.controller'

const router = express.Router()

router.post('/create-user', controller.createUserController)

export default router
