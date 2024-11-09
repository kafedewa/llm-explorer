import React from 'react'
import TokenChoices from './tokenChoice/TokenChoices'



const Completion = ({completion, response, onClick}) => {

    return (

        <div className="card bg-base-100 w-dvh shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Response: {response}</h2>
                <div className='flex grid-cols-4 gap-4 pt-4 overflow-scroll'>
                    {completion.map((tokens, idx) => {
                        const disabled = completion.length > (idx + 1) ? true : (completion[completion.length - 1].length === 0 ? true : false);
                        return (<TokenChoices disabled={disabled} key={idx} tokens={tokens} onClick={onClick}/>)
                    })}
                </div>
            </div>
        </div>

    )

}

export default Completion
