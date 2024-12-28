import React from 'react'
import {motion , AnimatePresence} from "framer-motion"
export default function ResponsiveNavbar({open}) {
  return (
    <>
      <AnimatePresence>
        {open && <motion.div
        initial = {{opacity:0 , y:-100}}
        animate={{opacity:100,y:0}}
        transition={{duration:0.7,ease:"easeInOut"}}
        exit={{opacity:0,x:100}}
        
        className='absolute top-0 left-0 w-full h-screen  mt-20 px-3  z-50  '>
        <div className='bg-primary text-white p-2 rounded-md py-3 '>
          <ul className='flex items-center gap-6 flex-col capitalize '>
            <li className='hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white'>Home</li>
            <li className='hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white' >Product</li>
            <li className='hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white'>About</li>
            <li className='hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white'>Shop</li>
            <li className='hover:shadow px-3 hover:rounded-sm cursor-pointer duration-200 hover:text-gray-500 hover:bg-white' >Contact</li>
          </ul>
        </div>
      </motion.div>}
      </AnimatePresence>    
    </>
  )
}
