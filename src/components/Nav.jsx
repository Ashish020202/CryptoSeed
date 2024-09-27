import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between'>
       <div className=''>
        <h1 className='text-3xl text-gray-950 font-semibold'>CryptoSeed</h1>
       </div>

       <div>
        <button className='font-semibold bg-black text-white p-4 rounded-md'>Github</button>
       </div>
      
    </div>
  )
}

export default Nav
