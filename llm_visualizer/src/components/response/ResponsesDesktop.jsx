import ResponseCard from "./ResponseCard"
import ResponseExplainer from "./ResponseExplainer"

const ResponsesDesktop = ({responses}) => {
    const maxRows = responses ? 'auto-rows-max' : '';

  return (
    <div className="drawer-side h-[calc(100vh-13rem)] lg:h-[calc(100vh-5rem)] overflow-auto ">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className={`menu bg-base-100 grid grid-cols-1 gap-2 ${maxRows} text-base-content h-full w-80 items-center justify-center`}>
            {responses ?
                responses.map((response, idx) => (
                    <ResponseCard key={idx} response={response} id={idx} />
                ))
                :
                <ResponseExplainer/>
            }
        </ul>
    </div>
  )
}

export default ResponsesDesktop