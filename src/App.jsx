import { useState } from 'react'
import { generateMnemonic } from "bip39";
import './App.css'
import Solanawallet from './components/Solanawallet';
import { Ethereum } from './components/Ethereum';
import Nav from './components/Nav';



function App() {  
  const [mnemonic,setMnemonic] = useState("");
  const [isvisible,setIsvisisble] = useState(false);
  
  const findNeumonic = async ()=>{
    const mn = await generateMnemonic();
    setMnemonic(mn.split(' '));
  }

  const hideShow = () =>{
    setIsvisisble(!isvisible);
  }

  return (
    <>
    
     <Nav />
     
     <div className='border border-x-2 border-y-2 rounded-xl p-7 border-black mt-12'>
     <div className='flex justify-between'>
     <div>
       <button onClick={findNeumonic} className='bg-slate-700 p-4 text-yellow-600 rounded-md border-red-600'>Create Secret Phrase</button>
     </div>
     <div className='relative'>
              <button 
                className="absolute top-0 right-0 bg-slate-700 text-white p-2 rounded"
                onClick={hideShow}
              >
                {isvisible ? "Hide" : "Show"}
              </button>
     </div>
     </div>
     <div className='my-5'>
     {mnemonic.length>0 && (
      <div className='grid grid-cols-4 gap-2'>
      {mnemonic.map((word,index)=>(
        <div key={index} className='bg-slate-700 text-white p-2 rounded'>{isvisible?word:" ***"}</div>
      ))}

      </div>
     )}
     </div>
     </div>
     
     
     {mnemonic&&(
      <div className='md:flex md:justify-between my-20'>
      <div className='w-full h-96'>
      <Solanawallet />
      </div>
      <div className='w-full h-96'>
      <Ethereum />
      </div>  

     </div>

     )}
     
    </>
  )
}

export default App
