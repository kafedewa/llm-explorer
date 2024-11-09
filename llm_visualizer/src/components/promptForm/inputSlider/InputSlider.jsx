import React, { useState } from 'react'

const InputSlider = ({value, setValue, label, min, max}) => {

  return (
        <>
        <div className='pr-2'> {label} </div>
        <input type="range" min={min} max={max} value={value}  onChange={(e) => setValue(e.target.value)} step="0.01" className="range range-primary w-1/4 mr-2" />
        <div className='mr-6 min-w-10 w-10 text-right'> {parseFloat(value).toFixed(2)} </div>
        </>
        )
}

export default InputSlider