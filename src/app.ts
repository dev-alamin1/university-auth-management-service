import express, { Application, Response, Request } from 'express'
import cors from 'cors'
import router from './app/modules/users/users.route'
const app: Application = express()

// cors
app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/app/v1', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
