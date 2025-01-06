import Image from 'next/image'

export default function Home() {
  return (
    <div className='p-5'>
      <div>
        <h2>Mobiles</h2>
        <div className='w-64'>
          <div>
            <img src='/assets/13.png' alt='Iphone' />
          </div>
          <div>
            <h3>Iphone 3 Pro</h3>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  )
}
