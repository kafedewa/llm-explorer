import {useRef, useEffect} from 'react'
import TokenChoice from './TokenChoice'

const TokenChoices = ({tokens, disabled, onClick}) => {

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current?.scrollIntoView({behavior: "smooth"});
  }, []); 


  return (
    <div>
        {tokens.map((token, idx) => (
          <div ref={divRef} key={idx}>
            <TokenChoice idx={idx} token={token} onClick={onClick} disabled={disabled}/>
          </div>
        ))}
    </div>
  )
}

export default TokenChoices