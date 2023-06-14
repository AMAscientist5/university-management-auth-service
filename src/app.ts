import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middleWares/globalErrorHandler'
const app: Application = express()

app.use(cors())

// parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter)

// global error handling
app.use(globalErrorHandler)

export default app
