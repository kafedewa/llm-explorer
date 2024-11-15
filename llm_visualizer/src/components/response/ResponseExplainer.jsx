import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const ResponseExplainer = () => {
  return (
    <div tabIndex={0} className="card collapse lg:collapse-open h-fit w-full bg-primary text-primary-content items-center justify-center mb-4">
        <input type="checkbox" />
        <h2 className="card-title collapse-title p-0 text-2xl text-center">Start creating a response by clicking the node</h2>
        <div className='collapse-content'>
          <p> <br></br></p>
          <p className="text-base">Each node contains two things: </p>
          <p> <br></br></p>
          <p className="text-base">1. The token, or the set of characters returned by the LLM </p>
          <p> <br></br></p>
          <p className="text-base">2. The logprobs of the token, or the probability that the model believes this is the optimal next token. The further from 0 the logprobs is, the less the model thinks it is the optimal response.  Nodes on the left will be more optimal and nodes on the right will be less optimal. </p>
        </div>
    </div>
)
}

export default ResponseExplainer