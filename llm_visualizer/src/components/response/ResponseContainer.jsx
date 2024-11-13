import ResponseCard from "./ResponseCard"

const ResponseContainer = ({ responses}) => {
  return (
    <div className="drawer-side h-[calc(100vh-13rem)] lg:h-[calc(100vh-5rem)] overflow-auto ">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-base-100 grid grid-cols-1 gap-2 auto-rows-max text-base-content h-full w-80">
            {responses ?
                responses.map((response, idx) => (
                    <ResponseCard key={idx} response={response} id={idx} />
                ))
                :
                <div className="card row-span-full bg-primary text-primary-content">
                    <h2 className="card-title p-0 text-2xl text-center">Start creating a response by clicking the node on the left.</h2>
                    <p> <br></br></p>
                    <p className="text-base">Each node contains two things: </p>
                    <p> <br></br></p>
                    <p className="text-base">1. The token, or the set of characters returned by the LLM </p>
                    <p> <br></br></p>
                    <p className="text-base">2. The logprobs of the token, or the probability that the model believes this is the optimal next token. The further from 0 the logprobs is, the less the model thinks it is the optimal response.  Nodes on the left will be more optimal and nodes on the right will be less optimal. </p>
                </div>
            }

        </ul>
    </div>
  )
}

export default ResponseContainer