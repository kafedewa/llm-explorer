import { useEffect, useState } from 'react'
import './App.css'
import Completion from './components/Completion';
import useGetCompletion from './hooks/useGetCompletion';
import PromptForm from './components/promptForm/PromptForm';
import { Toaster } from 'react-hot-toast';
import getSelectedResponse from './utils/getSelectedResponse';
import addNode from './utils/addNode';
import Welcome from './components/welcome/Welcome';

function App() {
  const [prompt, setPrompt] = useState("");
  const [top_p, setTop_p] = useState("1");
  const [temperature, setTemperature] = useState("1");
  const [lastNodeId, setLastNodeId] = useState(0);
  const [completion, setCompletion] = useState({});

  const { getCompletion } = useGetCompletion();
  
  const handleNodeClick = async (e) => {

    const newResponse = getSelectedResponse(e.attributes.id, completion);
    const newCompletion = await getCompletion(prompt, newResponse, temperature, top_p, lastNodeId, setLastNodeId);

    setCompletion((prevData) => addNode(e.attributes.id, newCompletion, prevData));

  }

  return (
    <div className=' bg-white overflow-x-hidden overflow-y-hidden'>

      <div className='flex flex-col h-dvh w-full'>
        <div><Toaster/></div>

        <PromptForm 
          setCompletion={setCompletion} 
          prompt={prompt} 
          setPrompt={setPrompt} 
          top_p={top_p} 
          setTop_p={setTop_p} 
          temperature={temperature} 
          setTemperature={setTemperature}
          lastNodeId={lastNodeId}
          setLastNodeId={setLastNodeId} />

        {Object.keys(completion).length > 0 ?
          (<div className='h-full'>
            <Completion completion={completion} handleNodeClick={handleNodeClick} /> </div>)
          : 
            <Welcome/>
          }
      </div>

    </div>
  )
}

export default App
