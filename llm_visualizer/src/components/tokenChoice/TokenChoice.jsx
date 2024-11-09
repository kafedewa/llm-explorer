import React from 'react'

const TokenChoice = ({idx, token, disabled, onClick}) => {
  const buttonColor = (disabled ? 
      (token.chosen ? `disabled:bg-secondary disabled:text-secondary-content` : `disabled:bg-base-300 disabled:text-base-content`) 
      : `btn-primary`);
  const disabledStatus = (disabled ? `disabled` : ``)

  return (
    <div className='pt-4'>
      <button className={`btn ${buttonColor}`}id={idx} value={token.token} onClick={onClick} disabled={disabledStatus}>
          {token.token} <br/>
          {token.logprobs}
      </button>      
    </div>

  )
}

export default TokenChoice