import React from 'react'
import InputSlider from './inputSlider/InputSlider'

const PromptForm = ({ handleSubmit, prompt, setPrompt, top_p, setTop_p, temperature, setTemperature }) => {


    return (
        <div className="navbar">
        <form onSubmit={handleSubmit} className='w-full pt-4 pr-4 pl-4'>
        <label className="input input-bordered w-full flex items-center gap-2 mr-6">
            Prompt
            <input type="text" 
            placeholder='Enter a prompt'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className='input-md text-black w-full'
            />
        </label>

        <InputSlider value={top_p} setValue={setTop_p} label={"Top_p"} min={"0"} max={"1.00"} />
        <InputSlider value={temperature} setValue={setTemperature} label={"Temperature"} min={"0"} max={"2.00"} />

            <button className='btn btn-secondary join-item' type='submit'>Submit</button>
        </form>
        </div>
    )
}

export default PromptForm