import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5'>
      <div>
        <h2>Mobiles</h2>
        <div className='py-5'>
          <div className='w-64'>
            <div className='bg-blue-100 p-5 rounded-lg'>
              <img src='/assets/13.png' alt='Iphone' />
            </div>
            <div className='font-bold text-lg my-2'>
              <h3>Iphone 3 Pro</h3>
            </div>
            <p className='text-sm'>
              the best you can get at this price with all the qualities in the world come fast
            </p>
            <div className='my-2 flex'>
              <div className='grow text-xl font-bold'>₦500,000</div>
              <button className='bg-emerald-600 text-white py-1 px-3 rounded-xl'>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
