import React, { useState } from 'react'

const EventsExample = () => {
    const [value, setValue] = useState<string>('')

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
        }
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>)=>{
    console.log(value)
    }
  return (
    <div>
        <input value={value} onChange={changeHandler} type="text" />
        <button onClick={clickHandler}>Кнопка</button>
    </div>
  )
}

export default EventsExample