import React from 'react'

const ResponseCard = ({ response }) => {

  return (
    <div className='mt-2'>
      <div className="card pt-4 bg-primary text-primary-content w-full">
        <div className="card-body p-0 text-left align-text-top">
          <h2 className="card-title p-0 text-left align-text-top">Response </h2>
          <p className='text-left align-text-top'>Score: {response.score}</p>
          <p className='text-left align-text-top'>Response {response.response}</p>
        </div>
      </div>
    </div>
  )
}

export default ResponseCard