import React from 'react'
import { useState } from 'react'
import { IoSearch, IoSend } from 'react-icons/io5'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

const Hero = () => {
    const [text, setText] = useState("")
    const [tab, setTab] = useState('')
    const [isOpen, setOpen] = useState('false')
    const sendText=()=>{
        toast.success(text, {duration:2000})
        setTab(text)
        setOpen(true)

        
    }
  return (

    <div className='sm:w-full  h-100 relative border-2 m-2 rounded-md shadow-md shadow-purple-500 border-cyan-600 z-0 flex items-center md:w-200 md:flex md:justify-center md:items-center md:border-2  md:rounded-lg md:shadow-md md:shadow-purple-500 '>
        <div className='z-[9999] fixed' >
        <Toaster reverseOrder={false} position='top-right'/>
        </div>
        <div className={` border-2 border-cyan-300 bottom-25 rounded-md absolute p-3 ${isOpen? "opacity-100 visible": "opacity-0 invisible"}`}>
            <p className='text-white'>{tab}</p>
        </div>
        <div className='border-2 border-purple-600 '>
            <input type="text " onChange={(e)=>setText(e.target.value)} className='border-2 outline-none  text-white px-2 border-cyan-600 rounded-xl py-1 text-xl bottom-2 absolute left-2' />
           <button onClick={sendText} className='rounded-full absolute bottom-3 right-38'>
            <IoSend className='text-purple-500 hover:text-cyan-500' size={32}/>
           </button>
        </div>
    </div>
  )
}

export default Hero