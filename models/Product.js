import { model, models, Schema } from 'mongoose'

const ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  picture: String,
})

const Product = models?.Product || model({ name: 'Product', ProductSchema })

export default Product
