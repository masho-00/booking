import React from 'react'

const Loading = () => {
  return <div className='flex justify-center items-center h-screen'>
      <div className=' animate-spin w-32 h-32 border-b-2 border-r-2 rounded-full border-black'></div>
    </div>;
}

export default Loading