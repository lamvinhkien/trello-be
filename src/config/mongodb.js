// password: ID7sEcyuYgegh9pj

const MONGODB_URI = 'mongodb+srv://lamvinhkien:ID7sEcyuYgegh9pj@cluster0.6y8x8eb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DATABASE_NAME = 'trello'

import { MongoClient, ServerApiVersion } from 'mongodb'

let trelloDatabaseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabaseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to database first!')
  return trelloDatabaseInstance
}