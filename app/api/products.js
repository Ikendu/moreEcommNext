import { initMongoose } from '@/lib/mongoose'

export default async function handle(req, res) {
  await initMongoose()

  req.json(await Product.find().exec())
}
