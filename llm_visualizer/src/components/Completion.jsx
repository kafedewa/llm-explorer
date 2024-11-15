import React, { useEffect, useState } from 'react'
import Tree from 'react-d3-tree'
import TokenChoice from './tokenChoice/TokenChoice'
import { useCenteredTree } from '../utils/helpers'
import ResponseContainer from './response/ResponseContainer'


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
                <ResponseContainer responses={responses}/>
            </div>

    )

}

export default Completion

//<ResponseContainer responses={responses}/>