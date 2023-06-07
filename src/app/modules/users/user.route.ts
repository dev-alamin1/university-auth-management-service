import express, { Request, Response } from 'express'
import { UserController } from './user.controller'

const router = express.Router()
router.get('/', (req: Request, res: Response) => {
  res.send('hi there ')
})

router.post('/create-user', UserController.createUserController)

export const UserRoutes = router
