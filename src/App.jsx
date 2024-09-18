import { useState } from 'react'
import { generateMnemonic } from "bip39";
import './App.css'


function App() {  
  const [mnemonic,setMnemonic] = useState("");
  
  const findNeumonic = async ()=>{
    const mn = await generateMnemonic();
    setMnemonic(mn.split(' '));
  }

  return (
    <>
     <div className=''>
       <button onClick={findNeumonic} className='bg-slate-600 p-4 text-yellow-600 rounded-md border-red-600'>Create you seed</button>
     </div>
     <div className='my-5'>
     {mnemonic.length>0 && (
      <div className='grid grid-cols-4 gap-2'>
      {mnemonic.map((word,index)=>(
        <div key={index} className='bg-slate-700 text-white p-2 rounded'>{word}</div>
      ))}

      </div>
     )}
     </div>
     
    </>
  )
}

export default App
