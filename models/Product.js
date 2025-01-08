import { models, Schema } from 'mongoose'

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  picture: String,
})
