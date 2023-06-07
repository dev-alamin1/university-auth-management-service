import express, { Application } from 'express'
import cors from 'cors'
import { UserRoutes } from './app/modules/users/user.route'
import globalErrorHandler from './app/middleware/globalErrorHandler'

const app: Application = express()

// cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/app/v1', UserRoutes)

// jodi amra custom error message and status code change kore dekhate chai ,
// tahole Error class ke extend kore korte pari

// app.get('/', (req:Request,res: Response) => {
//      throw new ApiError(400,'Error hoice');
// })

// app.get('/',(req:Request,res:Response,next:NextFunction)=>{
//     throw new ApiError(400,"Error happen")
//     // next("Find the bug")
// })

// //global error handeling
app.use(globalErrorHandler)

// app.get('/',(req:Request,res:Response,next:NextFunction)=>{
//      next("Error Happend, please do something to fix it ")
// });

// app.use((err:any,req:Request,res:Response,next:NextFunction)=>{
//      console.log(err);
// })

export default app
