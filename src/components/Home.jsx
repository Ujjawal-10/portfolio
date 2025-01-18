import React from 'react'

export const Home = () => {
  
  return (

    <div className=' flex flex-col gap-4 lg:flex-row w-full justify-between items-center p-10 md:p-20' >
        <div className='md:w-2/4 md:pt-10'>
            <h1 className='text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter'>
                Hello! I am Ujjawal
            </h1>
            <p className='text-sm md:text-base tracking-tight md:pt-10  text-left' >
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

            </p>
            <a href="/contact">
            <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-slate-600' >
                Contact Me
            </button>
            </a>
            
            </div>
            <div>
                <img className='' src='https://img.freepik.com/premium-vector/professional-businesswoman-avatar-icon-flat-vector-isolated-white-background_1120563-20454.jpg' alt=''/>
            </div>
        

    </div>
  )
}

