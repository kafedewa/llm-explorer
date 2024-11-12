import React from 'react'

const TokenChoice = ({  nodeDatum, toggleNode,
  handleNodeClick }) => {
  const buttonColor = (nodeDatum.attributes.chosen ? `disabled:bg-secondary disabled:text-secondary-content`: `btn-primary`);
  const disabledStatus = (nodeDatum.attributes.chosen ? `disabled` : ``);
  const nodeSize = { x: 150, y: 50 };
  const nodePlacement = { x: -75, y: -25 }
  const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: nodePlacement.x, y: nodePlacement.y };

  return (
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. */}
      <foreignObject {...foreignObjectProps}>
        <button className={`btn ${buttonColor}`}id={nodeDatum.attributes.id} value={nodeDatum.attributes.token} disabled={disabledStatus} onClick={() => handleNodeClick(nodeDatum)}>
            {nodeDatum.attributes.token} <br/>
            {nodeDatum.attributes.logprobs.toFixed(5)}
        </button> 
      </foreignObject>
    </g>
  )
}

export default TokenChoice
