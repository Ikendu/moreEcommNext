import mongoose from 'mongoose'

export function initMongoose() {
  return mongoose.connect(process.env.MONGODB_URL)
}
