import { initMongoose } from '@/lib/mongoose'
import Product from '@/models/Product'

export async function findAllProducts() {
  return Product.find().exec()
}
export default async function handle(req, res) {
  await initMongoose()
  const { ids } = req.query
  console.log('IDs:', ids)

  if (ids) {
    const idArray = ids.split(',')
    console.log(idArray)
    const response = await Product.find({ _id: { $in: idArray } }).exec()
    res.json(response)
  } else {
    const response = await findAllProducts()
    res.json(response)
  }
}
