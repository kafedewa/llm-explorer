import { useEffect, useState } from 'react'
import './App.css'
import Completion from './components/Completion';
import useGetCompletion from './hooks/useGetCompletion';
import PromptForm from './components/promptForm/PromptForm';



function App() {
  const [prompt, setPrompt] = useState("");
  const [top_p, setTop_p] = useState("1");
  const [temperature, setTemperature] = useState("1");
  const [response, setResponse] = useState([]);
  const [completion, setCompletion] = useState([]);

  const { getCompletion } = useGetCompletion();


  const handleSubmit = async (e) => {

    e.preventDefault();
    const newCompletion = await getCompletion(prompt, response, temperature, top_p);
    setCompletion([...completion, newCompletion]);    // TODO this should be in the hook

  }

  const handleNodeClick = async (e) => {

    const newResponse = [...response, e.target.value];
    setResponse(newResponse);

    const newCompletion = await getCompletion(prompt, newResponse, temperature, top_p);

    let clickedCompletion = completion[completion.length - 1];

    clickedCompletion[e.target.id].chosen = true;


    setCompletion([...completion.slice(0,-1), clickedCompletion, newCompletion]);

  }

  return (
    <div className='min-h-screen items-center justify-center bg-white'>

      <div className='flex flex-col h-dvh w-full overflow-auto px-4 py-4 rounded-lg'>

        <PromptForm handleSubmit={handleSubmit} prompt={prompt} setPrompt={setPrompt} top_p={top_p} setTop_p={setTop_p} temperature={temperature} setTemperature={setTemperature} />
        {completion.length > 0 ? 
          (<Completion completion={completion} response={response} onClick={handleNodeClick} />)
          : (
          <div className='h-full overflow-auto px-4 py-4'>
            <div className='flex flex-col h-full text-3xl justify-center'>
              <p>This tool helps people explore the hidden patterns and relationships that a large language model (LLM) uses to understand language. </p>
              <p> <br></br></p>
              <p>It visually shows how different words and ideas are connected in the model’s “thought process.” With this, anyone can see and better understand how the LLM organizes and links concepts to generate responses.</p>
            </div>
          </div>
          )}
        

      </div>

    </div>
  )
}

export default App
