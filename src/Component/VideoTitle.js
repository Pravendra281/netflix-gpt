import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-24 absolute '>
      <h1 className='font-bold text-5xl'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-80'> ▶️ Play</button>
        <button className= 'mx-2 bg-white text-black p-4 px-12 text-lg hover:bg-opacity-80 rounded-lg opacity-50'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle