import { RequestHandler } from 'express'
import { UserService } from './user.service'

const createUserController: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await UserService.createUser(user)

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

export const UserController = {
  createUserController,
}
