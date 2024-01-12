import React from 'react'

const ColorBar = ({onClick}) => {
    const changeBg=(e)=>{
        console.log(e.target.value)
        onClick(e.target.value)
    }
  return (
    <div className='bg-white rounded-3xl mx-10 flex items-center justify-center gap-5 flex-wrap py-4 md:px-14 px-5'>
        <button className='bg-red-600 px-2 py-1 rounded-md text-xl' value={'red-600'} onClick={(e)=>{changeBg(e)}}>Red</button>
        <button className='bg-blue-600 px-2 py-1 rounded-md text-xl' value={'blue-600'} onClick={(e)=>{changeBg(e)}}> Blue</button>
        <button className='bg-green-600 px-2 py-1 rounded-md text-xl' value={'green-600'} onClick={(e)=>{changeBg(e)}}> Green</button>
        <button className='bg-yellow-400 px-2 py-1 rounded-md text-xl' value={'yellow-400'} onClick={(e)=>{changeBg(e)}}>Yellow</button>
        <button className='bg-black text-white px-2 py-1 rounded-md text-xl' value={'black'} onClick={(e)=>{changeBg(e)}}> Black</button>
        <button className='bg-pink-600 px-2 py-1 rounded-md text-xl' value={'pink-600'} onClick={(e)=>{changeBg(e)}}>Pink</button>
        <button className='bg-[azure] px-2 py-1 rounded-md text-xl' value={'azure'} onClick={(e)=>{changeBg(e)}}>Azure</button>
        <button className='bg-teal-600 px-2 py-1 rounded-md text-xl' value={'teal-600'} onClick={(e)=>{changeBg(e)}}>Teal</button>
        <button className='bg-indigo-700 px-2 py-1 rounded-md text-xl' value={'indigo-700'} onClick={(e)=>{changeBg(e)}}>Purple</button>
        <button className='bg-gray-600 px-2 py-1 rounded-md text-xl' value={'gray-600'} onClick={(e)=>{changeBg(e)}}>Grey</button>
    </div>  
  )
}

export default ColorBar

