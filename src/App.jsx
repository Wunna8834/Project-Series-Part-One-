import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { girls } from './data/Girls'
import { Girls } from './components/Girls'
import { Button } from './components/Button'
import { Emoji } from './components/Emoji'

export const ColorContext = createContext(false)
function App() {
  const [state, setState] = useState(girls)
  const [condition, setCondition] = useState(false)
  const clearData = () => {
    setState([])
    setData()
  }
  const setData = () => {
    setCondition(!condition)
    setState(girls)
  }
  return (
    <div className="mx-auto mt-8 bg-white shadow-lg rounded-xl max-w-sm py-8 px-8">
      <h2 className='text-center text-lg text-violet-800'>$ရမ်းချစ်ဖူးသောမိန်းမများ</h2>
      {condition === false? <Girls data={state}/> : <Emoji />}
      <ColorContext.Provider value={condition}>
        <Button text={condition === false? "မေ့လိုက်တာပဲကောင်းပါတယ်" : "ဘယ်လိုမေ့လို့ရမှာလဲ"} onClick={() => clearData()}/>
      </ColorContext.Provider>
    </div>
  )
}

export default App
