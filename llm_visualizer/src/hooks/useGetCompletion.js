import React from 'react'

const useGetCompletion = () => {

        const getCompletion = async (prompt,response,temperature,top_p) => {
          try {
            const res = await fetch("/api/getNextResponse", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({prompt,response,temperature,top_p}),
            });
      
            const data = await res.json();
            if (data.error) {
              throw new Error(data.error);
            }
    
            const newCompletion = [];

            if(data.choices[0].finish_reason != "stop"){
              data.choices[0].logprobs.content[0].top_logprobs.map((logprob) => {
                newCompletion.push({
                  token: logprob.token,
                  logprobs: logprob.logprob,
                  chosen: false})
      
              });
            }
    
            return newCompletion;

          } catch (error) {
            console.log(error.message);
          }
        }
  


  return {getCompletion}
}

export default useGetCompletion