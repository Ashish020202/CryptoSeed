import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-between'>
       <div>
        <h1 className='text-3xl text-gray-950 font-semibold'>CryptoSeed</h1>
       </div>

       <div>
        <button className='font-semibold bg-violet-900 text-white p-2 rounded-md'>Github</button>
       </div>
      
    </div>
  )
}

export default Nav
