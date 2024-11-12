import { useEffect, useState } from 'react'
import './App.css'
import Completion from './components/Completion';
import useGetCompletion from './hooks/useGetCompletion';
import PromptForm from './components/promptForm/PromptForm';

function App() {
  const [prompt, setPrompt] = useState("");
  const [top_p, setTop_p] = useState("1");
  const [temperature, setTemperature] = useState("1");
  const [lastNodeId, setLastNodeId] = useState(0);
  const [completion, setCompletion] = useState({});

  const { getCompletion } = useGetCompletion();


  const handleSubmit = async (e) => {

    e.preventDefault();
    const newCompletion = await getCompletion(prompt, [], temperature, top_p, lastNodeId, setLastNodeId);
    const firstToken = newCompletion[0];
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
        return {
          ...node, children: node.children.map((child) => {
            return addNewNodeRecursive(child);
          })
        }
      }
      return node;
    };

    setCompletion((prevData) => addNewNodeRecursive(prevData));
  }

  // function takes in the completion and the target node and returns an array of strings 
  const getSelectedResponse = (selectedId) => {

    const getSelectedResponseRecursive = (node) => {

      if(node.attributes.id == selectedId){
        return [node.name];
      }
      else if (node.children.length > 0){
        for (let child in node.children) {
          let result = getSelectedResponseRecursive(node.children[child]);
          console.log("result is ", result);
          if (result) {
              return [node.name, ...result];
          }
        }
      }
      else{
        return;
      }
  

    }

    const responses = getSelectedResponseRecursive(completion);

    return responses;


  }

  const handleNodeClick = async (e) => {

    const newResponse = getSelectedResponse(e.attributes.id);
    console.log(newResponse);

    const newCompletion = await getCompletion(prompt, newResponse, temperature, top_p, lastNodeId, setLastNodeId);

    addNode(e.attributes.id, newCompletion);

  }

  return (
    <div className=' bg-white overflow-x-hidden overflow-y-hidden'>

      <div className='flex flex-col h-dvh w-full'>

        <PromptForm handleSubmit={handleSubmit} prompt={prompt} setPrompt={setPrompt} top_p={top_p} setTop_p={setTop_p} temperature={temperature} setTemperature={setTemperature} />

        {Object.keys(completion).length > 0 ?
          (<div className='h-full'>
            <Completion completion={completion} handleNodeClick={handleNodeClick} /> </div>)
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
