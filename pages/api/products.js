import { initMongoose } from '@/lib/mongoose'
import Product from '@/models/Product'

const findAllProducts = () => {
  return Product.find().exec()
}
export default async function handle(req, res) {
  await initMongoose()
  const response = await findAllProducts()

  res.json(response)
}

export async function getServerSideProps() {
  await initMongoose()

  const products = await findAllProducts()

  return {
    props: { products: JSON.parse(JSON.stringify(products)) },
  }
}
