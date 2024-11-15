import React from 'react'

const ResponseExplainer = () => {
  return (
    <div className="card h-fit w-full bg-primary text-primary-content items-center justify-center mb-4">
        <h2 className="card-title p-0 text-2xl text-center">Start creating a response by clicking the node.</h2>
        <p> <br></br></p>
        <p className="text-base">Each node contains two things: </p>
        <p> <br></br></p>
        <p className="text-base">1. The token, or the set of characters returned by the LLM </p>
        <p> <br></br></p>
        <p className="text-base">2. The logprobs of the token, or the probability that the model believes this is the optimal next token. The further from 0 the logprobs is, the less the model thinks it is the optimal response.  Nodes on the left will be more optimal and nodes on the right will be less optimal. </p>
    </div>
)
}

export default ResponseExplainer