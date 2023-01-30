import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import thisimg from '../components/Logo.jpeg'
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');
  const [fontBold, setFontBold] = useState('bold');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('rgba(255, 255, 255 , .95)');
        setTextColor('#4F6BBB');
        setFontBold('800')
      } else {
        setColor('rgba(0, 0, 0 , 0)');
        setTextColor('#ffffff');
        setFontBold('400')        
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      
      style={{ backgroundColor: `${color}`}}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center p-4 text-white'>
          <Link href='/' ><Image src={thisimg} width={75} height={75} alt='Logo'/></Link> 
        <ul style={{ color: `${textColor}` , fontWeight: `${fontBold}`}} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/#about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/news'>News</Link>
          </li>
          <li className='p-4'>
            <Link href='/calendar'>Calendar</Link>
          </li>
          <li className='p-4'>
              <Link href='/contact'>Contact</Link>
            </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/#about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/news'>News</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/calendar'>Calendar</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-500'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;