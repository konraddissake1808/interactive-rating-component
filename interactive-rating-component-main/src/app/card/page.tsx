import React from 'react'
import Image from 'next/image'

function Page() {
  return (
    <div className='flex items-center justify-center h-96 w-full bg-dark-blue text-[var(--White)]'>
        <div className='w-[90%]'>
            <div>
                <Image src="/icon-star.svg" alt="star" width={40} height={40} className='bg-darker-blue rounded-full p-2' />
            </div>
            <div>
                <div>
                    <p className='font-overpass text-2xl'>How did we do?</p>
                </div>
                <div>
                    <p className='font-overpass text-sm text-light-grey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}

export default Page