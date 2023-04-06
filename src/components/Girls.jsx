import React from 'react'

export const Girls = ({data}) => {
  return (
    <ul className='space-y-3 px-5 max-w-sm mt-6'>
      {data.map(item => 
        <li className='flex items-center space-x-4' key={item.id}>
          <img className='block h-16 w-16 rounded-full sm:shrink-0' src={item.imgSrc}/>
          <div>
            <p className='text-lg text-black font-semibold'>{item.name}</p>
            <p className='text-slate-500 font-medium'>{item.type}</p>
          </div>
        </li>  
      )}
    </ul>
  )
}
