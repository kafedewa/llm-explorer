import React from 'react'

const ResponseCard = ({ response, id }) => {

  return (
    <div className='mt-2'>
      <div className="card pt-4 bg-primary text-primary-content w-full">
        <div className="card-body p-0 text-left align-text-top">
          <h2 className="card-title p-0 text-left align-text-top">Branch {id + 1} </h2>
          <p className='text-left align-text-top'>Average Logprobs: {(response.score / response.response.length).toFixed(5)}</p>
          <p className='text-left align-text-top'>Response: {response.response}</p>
        </div>
      </div>
    </div>
  )
}

export default ResponseCard