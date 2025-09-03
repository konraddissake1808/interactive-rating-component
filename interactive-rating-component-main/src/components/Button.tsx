'use client'
import { redirect } from 'next/navigation';
import React from 'react'

function Button() {
    const ratingSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const selectedRating = (document.querySelector('input[name="rating"]:checked') as HTMLInputElement)?.value;
      if (selectedRating) {
          // Redirect to thank you page
          redirect('/thankYou?rating=' + selectedRating);
      }
    };
   

  return (
    <div>
        <button onClick={ratingSubmit} className='bg-orange text-very-dark-blue text-sm font-overpass font-bold rounded-full h-10 w-full hover:bg-white hover:text-very-dark-blue duration-200'>SUBMIT</button>
    </div>
  )
}

export default Button