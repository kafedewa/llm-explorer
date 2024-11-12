import React from 'react'

const Welcome = () => {
  return (
    <div className='h-full overflow-auto px-4 py-4'>
        <div className='flex flex-col h-full text-base items-center justify-center'>
            <div className="card pt-4 bg-primary text-primary-content w-3/5">
                <p className='text-2xl'>Welcome! This tool helps people explore the hidden patterns and relationships that are represented in large language models (LLMs). </p>
                <p> <br></br></p>
                <p>It shows how different words and ideas are connected in the model’s “thought process.” With this, anyone can see and better understand how LLMs organize and link concepts to generate responses.</p>
                <p> <br></br></p>
                <p>To get started, enter a prompt and start exploring!</p>
            </div>
        </div>
    </div>
  )
}

export default Welcome