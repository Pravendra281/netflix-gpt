import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] md:px-24 p-6 absolute bg-gradient-to-r from-gray text-white'>
      <h1 className=' font-bold text-2xl md:text-5xl'>{title}</h1>
      <p className=' hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className='bg-white text-black md:py-4 py-1 px-3 md:px-12 text-lg rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
        <button className= '  hidden md:inline-block mx-2 bg-white text-black p-4 px-12 text-lg hover:bg-opacity-80 rounded-lg opacity-50'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle