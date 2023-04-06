import React from 'react'
import emoji from '../assets/images/Emoji.png'
export const Emoji = () => {
  return (
    <div>
        <img className='w-25' src={emoji}/>
        <p className='text-center text-lg text-red-500'>မိန်းမတွေမကောင်းဘူးဆိုသော်ငြားလဲ...</p>
    </div>
  )
}
