'use client'
import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import RatingComponent from '@/components/RatingComponent'

function Page() {

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
       const selectedRating = (document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value;
       if (selectedRating) {
            try {
                const response = await fetch('/api/ratings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ number: Number(selectedRating) }),
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }           
                // Redirect to thank you page
                window.location.href = '/thankYou';
            } catch (error) {
                console.error('Error submitting rating:', error);
            }
        }
    }

  return (
    <div className='flex items-center justify-center h-96 w-full bg-darker-blue text-[var(--White)]'>
        <div className='w-[90%]'>
            <div className='w-10 h-10 mb-6 flex justify-center items-center bg-dark-blue rounded-full'>
                <Image src="/icon-star.svg" alt="star" width={30} height={30} className='bg-dark-blue rounded-full p-2' />
            </div>
            <div>
                <div className='mb-4'>
                    <p className='font-overpass text-2xl'>How did we do?</p>
                </div>
                <div className='mb-6'>
                    <p className='font-overpass text-sm text-light-grey'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='mb-6'>
                    <RatingComponent />
                </div>
                <div>
                    <Button />
                </div>
            </form> 
        </div>
    </div>
  )
}

export default Page