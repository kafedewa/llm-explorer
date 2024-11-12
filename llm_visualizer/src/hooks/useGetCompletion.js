
const useGetCompletion = () => {

        const getCompletion = async (prompt,response,temperature,top_p,lastNodeId,setLastNodeId) => {
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
            let startId = lastNodeId;

            if(data.choices[0].finish_reason != "stop"){
              data.choices[0].logprobs.content[0].top_logprobs.map((logprob) => {
                newCompletion.push({
                  name: logprob.token,
                  attributes: {
                    id: startId,
                    token: logprob.token,
                    logprobs: logprob.logprob,
                    chosen: false,
                  },
                  children: []});
                startId += 1;
              });
            }

            setLastNodeId(startId);
    
            return newCompletion;

          } catch (error) {
            console.log(error.message);
          }
        }
  


  return {getCompletion}
}

export default useGetCompletion