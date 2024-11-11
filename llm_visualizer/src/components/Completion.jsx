import React from 'react'
import Tree from'react-d3-tree'
import TokenChoice from './tokenChoice/TokenChoice'
import { useCenteredTree } from '../helpers'



const Completion = ({completion, response, handleNodeClick}) => {
      const nodeSize = { x: 200, y: 200 };
      const [dimensions, translate, containerRef] = useCenteredTree();

  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

    return (

        <div className="card bg-base-100 w-dvh h-full shadow-xl">

                <h2 className="card-title">Response: {response}</h2>
                <div className='w-full h-full'ref={containerRef}>
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
        </div>

    )

}

export default Completion
