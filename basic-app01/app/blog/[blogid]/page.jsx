import React from 'react'

const blogid =  async({params}) => {
    console.log(await params);
    const {blogid}=await params
    //it can be 100 page of different blog that's why need to be dynmic routes 
  return (
    <div>blogid <span className=' bg-purple-600 text-white p-2 rounded font-bold'>{blogid}</span></div>
  )
}

export default blogid