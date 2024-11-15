
const ResponseCard = ({ response, id }) => {

  return (
      <div className="card pt-4 bg-primary text-primary-content flex-shrink-0 h-fit w-72">
        <div className="card-body p-0 text-left align-text-top">
          <h2 className="card-title p-0 text-left align-text-top">Branch {id + 1} </h2>
          <p className='text-left align-text-top'>Average Logprobs: {(response.score / response.response.length).toFixed(5)}</p>
          <p className='text-left align-text-top'>Response: {response.response}</p>
        </div>
      </div>
  )
}

export default ResponseCard