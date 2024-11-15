import ResponseCard from "./ResponseCard"
import ResponseExplainer from "./ResponseExplainer"

const ResponsesMobile = ({responses}) => {
  
  return (
    <footer className="footer fixed bottom-0 h-75 w-full bg-base-100 text-base-content shrink-0 overflow-auto">
        <div className={`p-2 bg-base-100 grid grid-rows-1 grid-flow-col gap-2 text-base-content overflow-x-auto`}>
            {responses ?
                responses.map((response, idx) => (
                    <ResponseCard key={idx} response={response} id={idx} />
                ))
                :
                <ResponseExplainer/>
            }
        </div>
    </footer>
  )
}

export default ResponsesMobile