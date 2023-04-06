import React, { useContext } from 'react'
import { ColorContext } from '../App'
export const Button = ({text, onClick}) => {
  const condition = useContext(ColorContext)
  console.log("Call from Button: ", condition)
  const style = 'mt-6 block focus:outline-none focus:ring px-4 py-2 text-white text-center rounded-lg w-full'
  const red_button = 'bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-300'
  const violet_button = 'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:ring-violet-300'
  return (
    <button onClick={onClick} className={`${style} ${condition ? red_button : violet_button}`}>
        {text}
    </button>
  )
}

