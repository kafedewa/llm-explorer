import React from 'react'

const TokenChoice = ({  nodeDatum, handleNodeClick }) => {
  const rectangleClasses = (nodeDatum.attributes.chosen ? `fill-secondary`: `fill-primary hover:fill-primary-focus`);
  const textClasses = (nodeDatum.attributes.chosen ? `fill-secondary-content text-sm font-sans` : `fill-primary-content text-sm`)
  const nodeSize = { x: 100, y: 60 };
  const nodePlacement = { x: -50, y: -35 }
  const nodeProps = { width: nodeSize.x, height: nodeSize.y, x: nodePlacement.x, y: nodePlacement.y, stroke:"transparent", className:rectangleClasses };
  const textProps = { className:textClasses }

  return (
    <g>
      <svg {...nodeProps} xmlns="http://www.w3.org/2000/svg" onClick={() => handleNodeClick(nodeDatum)} >
        <rect width="100%" height="100%" rx="15" id={nodeDatum.attributes.id} />
        <text {...textProps} fontWeight="bold" y="20" x="50%" dominantBaseline="middle" textAnchor="middle">
          {nodeDatum.attributes.token}
        </text>
        <text {...textProps} y="40" x="50%" dominantBaseline="middle" textAnchor="middle">
          {nodeDatum.attributes.logprobs.toFixed(5)}
        </text>
      </svg>
    </g>
  )
}

export default TokenChoice

/*
    <g>
      {/* `foreignObject` requires width & height to be explicitly set. *//*}
      <foreignObject {...foreignObjectProps}>
        <button className={`btn ${buttonColor}`}id={nodeDatum.attributes.id} value={nodeDatum.attributes.token} disabled={disabledStatus} onClick={() => handleNodeClick(nodeDatum)}>
            {nodeDatum.attributes.token} <br/>
            {nodeDatum.attributes.logprobs.toFixed(5)}
        </button> 
      </foreignObject>
    </g>

*/