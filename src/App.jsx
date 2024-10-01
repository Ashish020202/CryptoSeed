import { useState } from 'react'
import { generateMnemonic } from "bip39";
import './App.css'
import Solanawallet from './components/Solanawallet';
import { Ethereum } from './components/Ethereum';
import Nav from './components/Nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css';



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

  const copyToClipboard = () => {
    if (mnemonic.length > 0) {
      const phrase = mnemonic.join(' ');
      navigator.clipboard.writeText(phrase)
        .then(() => {
          toast("Secret phrase copied");
        })
        .catch(() => {
          toast("Failed to copy secret phrase.");
        });
        
    }
  };


  return (
    <>
    <div className='my-0'>
    <Nav />
    </div>
     
     <div className='border border-x-2 border-y-2 rounded-xl p-5 border-black mt-12'>
     <div className='flex justify-between'>
     <div>
       <button onClick={findNeumonic} className='bg-slate-700 p-4 text-yellow-600 rounded-md border-red-600'>Create Secret Phrase</button>
     </div>
     <div className='relative'>
              <button 
                className="absolute top-0 right-0 bg-slate-700 text-white p-4 rounded"
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
     <button 
                onClick={copyToClipboard} 
                className='mt-1 bg-slate-200 border-x-2 border-y-2 border-black flex justify-start text-black py-2 px-4 rounded align-content: flex-end;'>
                copy
              </button>
              <ToastContainer />
            
     </div>
     
     
     {mnemonic&&(
      <div className='md:flex md:justify-between gap-4 my-10'>
      <div className='w-96 h-96 border border-x-2 border-y-2 rounded-xl p-5 border-black'>
      <Solanawallet />
      </div>
      <div className='w-96 h-96 border border-x-2 border-y-2 rounded-xl p-5 border-black'>
      <Ethereum />
      </div>  

     </div>

     )}

    </>
  )
}

export default App
