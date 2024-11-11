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
  const [lastNodeId, setLastNodeId] = useState(0);
  const [completion, setCompletion] = useState({});

  const { getCompletion } = useGetCompletion();


  const handleSubmit = async (e) => {

    e.preventDefault();
    const newCompletion = await getCompletion(prompt, response, temperature, top_p, lastNodeId, setLastNodeId);
    const firstToken = newCompletion[0];

    console.log(firstToken);
    setCompletion(firstToken);

  }

  const addNode = (parentId, newChildren) => {
    const addNewNodeRecursive = (node) => {
      if (node.attributes.id == parentId) {
        return {
          ...node,
          attributes: {
            ...node.attributes,
            chosen: true
          },
          children: newChildren
        };
      }
      else if (node.children.length > 0) {
          return {...node, children: node.children.map((child) => {
            return addNewNodeRecursive(child);
        })}
      }
      return node;
    };

    setCompletion((prevData) => addNewNodeRecursive(prevData));
  }

  const handleNodeClick = async (e) => {

    console.log(e);

    const newResponse = [...response, e.name];
    setResponse(newResponse);

    const newCompletion = await getCompletion(prompt, newResponse, temperature, top_p, lastNodeId, setLastNodeId);

    addNode(e.attributes.id, newCompletion);

    //let clickedCompletion = completion[completion.length - 1];

    //clickedCompletion[e.target.id].chosen = true;


    //setCompletion([...completion.slice(0,-1), clickedCompletion, newCompletion]);

  }

  return (
    <div className='min-h-screen items-center justify-center bg-white'>

      <div className='flex flex-col h-dvh w-full overflow-auto px-4 py-4 rounded-lg'>

        <PromptForm handleSubmit={handleSubmit} prompt={prompt} setPrompt={setPrompt} top_p={top_p} setTop_p={setTop_p} temperature={temperature} setTemperature={setTemperature} />

        {Object.keys(completion).length > 0 ? 
          ( <div className='h-full'> 
          <Completion completion={completion} response={response} handleNodeClick={handleNodeClick} /> </div>)
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
