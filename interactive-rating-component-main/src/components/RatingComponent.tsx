import React from 'react'

function RatingComponent() {
  return (
    <div>
        <div className='flex justify-between my-4 radioContainer'>
            <div className=''>
                <input className='options' type="radio" name='rating' id='one' />
                <label className='labelDiv' htmlFor='one'>1</label>
            </div>
            <div className=''>
                <input className='options' type="radio" name="rating" id="two" />
                <label className='labelDiv' htmlFor='two'>2</label>
            </div>
            <div className=''>
                <input className='options' type="radio" name="rating" id="three" />
                <label className='labelDiv' htmlFor='three'>3</label>
            </div>
            <div className=''>
                <input className='options' type="radio" name="rating" id="four" />
                <label className='labelDiv' htmlFor='four'>4</label>
            </div>
            <div className=''>
                <input className='options' type="radio" name="rating" id="five" defaultChecked />
                <label className='labelDiv' htmlFor='five'>5</label>
            </div>
        </div>
    </div>
  )
}

export default RatingComponent