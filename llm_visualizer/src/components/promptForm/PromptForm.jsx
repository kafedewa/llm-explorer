import React from 'react'
import toast from 'react-hot-toast'
import InputSlider from './inputSlider/InputSlider'
import useGetCompletion from '../../hooks/useGetCompletion';

const PromptForm = ({ setCompletion, prompt, setPrompt, top_p, setTop_p, temperature, setTemperature, lastNodeId, setLastNodeId }) => {
    const { getCompletion } = useGetCompletion();
    
    const handleSubmit = async (e) => {
        console.log("in handle submit")
        e.preventDefault();

        const success = handleInputErrors(prompt, temperature, top_p);
        if(!success) return false;
        const newCompletion = await getCompletion(prompt, [], temperature, top_p, lastNodeId, setLastNodeId);
        const firstToken = newCompletion[0];
        setCompletion(firstToken);
    
      }


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

        <InputSlider value={top_p} setValue={setTop_p} label={"Top_p"} min={"0"} max={"1.00"} dataTip={"Limits the output to the top p cumulative probability of the predicted words, meaning it restricts word selection to a subset of the most likely words."} />
        <InputSlider value={temperature} setValue={setTemperature} label={"Temperature"} min={"0"} max={"2.00"} dataTip={"Controls the \"creativity\" or randomness of the output. Higher values maske the responses more random, encouraging creative or diverse outputs."} />

            <button className='btn btn-secondary join-item' type='submit'>Start Exploring!</button>
        </form>
        </div>
    )
}

export default PromptForm


function handleInputErrors(prompt, temperature, top_p){
    if(!prompt){
        toast.error("Please enter a prompt.");
        return false;
    }

    if(prompt.length > 100){
        toast.error("Only prompts less than 100 characters are allowed");
        return false;
    }

    if(top_p > 1 || top_p < 0) {
        toast.error("Please enter a top_p in the range.");
        return false;
    }

    if(temperature > 2 || temperature < 0){
        toast.error("Please enter a temperature in the range.");
        return false;
    }

    return true;
}