import { useState,useEffect } from "react";
import ResponsesDesktop from "./ResponsesDesktop";
import ResponsesMobile from "./ResponsesMobile";

const ResponseContainer = ({ responses }) => {
    const [isLarge, setIsLarge] = useState(window.innerWidth > 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLarge(window.innerWidth > 1024);
        };
    
        window.addEventListener('resize', handleResize);
    
        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
        }, []);

  return (
    <>
    {isLarge ?
    <ResponsesDesktop responses={responses}/>
    :
    <ResponsesMobile responses={responses}/>
    }
    </>

  )
}

export default ResponseContainer

