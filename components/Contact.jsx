import React from 'react'

const Contact = () => {
  return (
    <div className='max-w-[1240px] m-auto p-4 mb-[5rem]'>
        <h1 className='text-2xl font-bold text-center text-blue-900 p-4'>Submit Questions Here</h1>
        <form className='max-w-[600px] m-auto' action="https://formsubmit.co/b969a47033ea3b36e7f3a3becb2964d0" method='post'>
            <div className='grid grid-cols-2 gap-2'>
                <input className='border shadow-lg p-3' type="text" placeholder='Name' name='name'/>
                <input className='border shadow-lg p-3' type="email" placeholder='Email' name='email'/>
            </div>
            <input className='border shadow-lg p-3 w-full my-2' type="text" placeholder='Subject' name='subject' />
            <textarea className='border shadow-lg p-3 w-full' cols="30" rows="10" placeholder='Message' name='message'></textarea>
            <button className='border shadow-lg text-white bg-blue-900 p-3 w-full mt-2'>Submit</button>
        </form>
    </div>
  )
}

export default Contact