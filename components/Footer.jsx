import React from "react"
import {AiFillTwitterCircle, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
import {SiDiscord} from 'react-icons/si'
import Link from "next/link"

const Footer = () => {
  return (
    <div className=" bg-blue-900 text-white py-[2rem] text-center content-center">

        <div className='grid gap-1 grid-cols-2 md:grid-cols-6 mx-0 xl:mx-[5rem]'>
          <div className='bg-blue-900 col-span-2' > 
            <div className="flex text-center justify-evenly text-4xl mx-[3rem] py-1">
            <a href='https://twitter.com/KUInfoSec/' target='blank' rel="noopener noreferrer" ><AiFillTwitterCircle/></a> 
            <a href='https://www.instagram.com/kuinfosec/' target='blank' rel="noopener noreferrer" ><AiFillInstagram/></a> 
            <a href='https://github.com/KUISC' target='blank' rel="noopener noreferrer" ><AiFillGithub/></a> 
            <a href='https://discord.gg/zeuP3Hp' target='blank' rel="noopener noreferrer" ><SiDiscord/></a> 

            </div>
          </div>          
          <div className='bg-blue-900 col-span-2 py-1' >© 2022 - University of Kansas Information Security Club</div>
          {/* <div className='bg-blue-900 col-span-2 ' ><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">Click Me!</button></div> */}
        </div>

    </div>
  )
}

export default Footer
