import { Response, Request } from 'express'
import { createUser } from './users.service'

const createUserController = async (req: Request, res: Response) => {
  const { user } = req.body
  const result = await createUser(user)
  res.status(200).send({
    message: 'user create success',
    data: result,
  })
}

export default {
  createUserController,
}
