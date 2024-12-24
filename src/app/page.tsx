'use client'
import React from 'react'
import Button from './Components/Button' 
import Input from './Components/Input'     
const page = () => {     
   
  return ( 
    <div className='flex justify-center '>
    <Button 
     text='Click Me'  
     className='bg-gray-800 h-10 text-white hover:bg-gray-950 '  
     />  
     <Input  className='h-10'/> 
      
      </div>
  )
}

export default page
