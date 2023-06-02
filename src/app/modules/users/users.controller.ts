import { Response, Request, NextFunction } from 'express'
import { createUser } from './users.service'

const createUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body
    const result = await createUser(user)

    res.status(200).json({
      success: true,
      message: 'User created successfully',
      data: result,
    })
  } catch (err) {
    // res.status(400).json({
    //   // success:false,
    //   // message:"User not created ",
    //   error:err
    // })

    // we can use global erro handler , using next
    next(err)
  }
}

export default {
  createUserController,
}
