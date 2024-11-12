import React from 'react'

const TokenChoice = ({  nodeDatum, toggleNode,
  handleNodeClick }) => {
  const buttonColor = (nodeDatum.attributes.chosen ? `btn-secondary`: `btn-primary`);
  const nodeSize = { x: 150, y: 50 };
  const nodePlacement = { x: -75, y: -25 }
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: nodePlacement.x, y: nodePlacement.y };

  return (
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <button className={`btn ${buttonColor}`}id={nodeDatum.attributes.id} value={nodeDatum.attributes.token} onClick={() => handleNodeClick(nodeDatum)}>
            {nodeDatum.attributes.token} <br/>
            {nodeDatum.attributes.logprobs.toFixed(5)}
        </button> 
      </foreignObject>
    </g>
  )
}

export default TokenChoice
