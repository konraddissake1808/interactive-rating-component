'use client'
import React, { Suspense , useEffect, useState } from 'react'
import Image from 'next/image'
//import { useSearchParams } from 'next/navigation';

/*export const GetRating = () => {
    const searchParams = useSearchParams();
    const selectedRating = searchParams.get('rating');
    return selectedRating
    const selectedRating = (document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value;
    return selectedRating
}*/



function ThankYou() {
    const [rating, setRating] = useState<string | undefined>()
    //const ratingValue = GetRating();
    useEffect(() => {
       const selectedRating = (document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value;
       if(selectedRating) {
        setRating(selectedRating);
       }
    }, []);


    //const selectedRating = (document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value;
    
    console.log('Selected Rating in ThankYou Page:',rating);
    

  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="flex flex-col items-center justify-center h-screen bg-[var(--Very-Dark-Blue)] text-[var(--White)]">
            <div className="flex items-center justify-center w-[90%] xs:w-[340px]" id="card-container">
                <div className="flex items-center justify-center h-96 w-full bg-dark-blue text-[var(--White)]" id='card'>
                    <div>
                        <div className='flex items-center justify-center h-96 w-full bg-darker-blue text-[var(--White)] text-center'>
                            <div className='w-[90%]'>
                                <div className='mb-6 w-full flex justify-center'>
                                    <Image src="/illustration-thank-you.svg" alt="star" width={30} height={30} className='w-36' />
                                </div>
                                <div>
                                    <div className='mb-8 flex justify-center'>
                                        <p className='font-overpass text-sm bg-dark-blue text-orange rounded-full w-40 py-1.5'>You selected {rating} out of 5</p>
                                    </div>
                                </div>
                                <div>
                                    <div className='mb-4'>
                                        <p className='font-overpass text-2xl'>Thank you!</p>
                                    </div>
                                    <div className=''>
                                        <p className='font-overpass text-sm text-light-grey'>We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Suspense>
  )
}

export default ThankYou