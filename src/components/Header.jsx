import React from 'react'

const Header = () => {
  return (
    <>
        <div className='flex justify-between items-center bg-black p-4'>
          <p className='text-lg text-orange-400 font-mono font-bold tracking-wide'>KARTO</p>
          <form className='flex items-center gap-2'>
            <input type="search" placeholder="Search for Products" className='text-orange-200 bg-black border-2 border-orange-400 focus:outline-2 focus:outline-offset-2 focus:outline-orange-400 px-2 rounded-sm'/>
            <button type="submit" className='bg-orange-400 text-black px-4  rounded-sm hover:bg-orange-500 transition duration-300'>Search</button>
          </form>
        </div>
    </>
  )
}

export default Header