import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree'
import TokenChoice from './tokenChoice/TokenChoice'
import { useCenteredTree } from '../helpers'
import ResponseCard from './responseCard/ResponseCard'


const createResponse = (data) => {

    const createResponseRecursive = (node) => {

        let childResponses = [];

        if (node.attributes.chosen) {

            if (node.children.length > 0) {
                for (let child in node.children) {
                    let result = createResponseRecursive(node.children[child]);
                    if (result) {
                        childResponses = [...childResponses, ...result];
                    }
                }
            }

            if (childResponses.length === 0) {
                return [{ response: [node.name], score: node.attributes.logprobs }]
            } else {
                for (let child in childResponses) {
                    childResponses[child].response.unshift(node.name);
                    childResponses[child].score += node.attributes.logprobs;
                }
                return childResponses;
            }
        } else {
            return;
        }

    }

    const responses = createResponseRecursive(data);

    return responses;
}


const Completion = ({ completion, handleNodeClick }) => {
    const [dimensions, translate, containerRef] = useCenteredTree();
    const [responses, setResponses] = useState([]);

    useEffect(() => {
        setResponses(createResponse(completion));
    }, [completion])

    return (
        <div className=''>
            <div className="drawer drawer-open drawer-end h-full">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col h-full items-center justify-center" ref={containerRef}>
                    <Tree
                        data={completion}
                        dimensions={dimensions}
                        translate={translate}
                        pathFunc='step'
                        orientation='vertical'
                        renderCustomNodeElement={(rd3tProps) =>
                            TokenChoice({ ...rd3tProps, handleNodeClick })
                        }
                    />
                </div>
                <div className="drawer-side overflow-auto ">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-100 text-base-content w-90 pb-24">
                        {responses &&
                            responses.map((response, idx) => (
                                <ResponseCard key={idx} response={response} />
                            ))
                        }

                    </ul>
                </div>
            </div>
        </div>

    )

}

export default Completion
