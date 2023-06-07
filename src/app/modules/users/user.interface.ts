import { Model } from 'mongoose'

// Create an interface representing a document in MongoDB.
export type IUser = {
  id: string
  role: string
  password: string
}

export type UserModel = Model<IUser, Record<string, unknown>> // for static methods
