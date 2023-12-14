'use client'


import { RiMenu2Line, RiHomeFill } from 'react-icons/ri'
import { IoCloseOutline } from 'react-icons/io5'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { FaUsers, FaEnvelope } from 'react-icons/fa'

import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { useState } from 'react'



const links = [
    {
        icon: <RiHomeFill />,
        path: 'home',
        name: 'home',
        offset: 0,
    },
    {
        icon: <BiSolidFoodMenu />,
        path: 'menu',
        name: 'menu',
        offset: 0,
    },
    {
        icon: <FaUsers />,
        path: 'about',
        name: 'about',
        offset: -50,
    },
    {
        icon: <FaEnvelope />,
        path: 'contact',
        name: 'contact',
        offset: 0,
    },
]

const MobileNav = ({containerStyles, iconStyles, linkStyles,}) => {

    const [showNav, setShowNav] = useState(false)

  return (
    <div className={`${containerStyles}`}>
        {/* nav trigger btn  */}
        <div onClick={() => setShowNav(prev => !prev)} className='cursor-pointer'>
            <RiMenu2Line
            className='text-3xl text-white transition-all duration-200'
            />
        </div>
        <aside className={`${showNav ? 'right-0' : '-right-full'}
        bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500 `}>
            <div className='flex flex-col items-center justify-between h-full'>
                {/* nav close btn */}
                <div onClick={() => setShowNav(false)} 
                className='cursor-pointer text-4xl text-white absolute w-10 h-10 left-8
                top-8 bg-green flex items-center justify-center'>
                    <IoCloseOutline />
                </div>
                {/* logo */}
                <Link href='/'>
                    <Image 
                    src='/logo.svg' width={90} height={36} alt='logo'
                    />
                </Link>
                {/* links */}
                <div className='flex flex-col gap-y-8'>
                    {
                        links.map(({icon, name, path, offset}, i) => (
                            <ScrollLink
                            className='flex items-center gap-x-3'
                            onClick={() => setShowNav(false)}
                            key={i} to={path} offset={offset} smooth={true}>
                                <div className={`${iconStyles}`}>
                                    {icon}</div>
                                <p className={`${linkStyles}`}>
                                    {name}</p>
                            </ScrollLink>
                        ))
                    }
                </div>
                {/* btn */}
                <ScrollLink to='reservation' smooth offset={-150}>
                    <Button variant='orange' >
                        Book a table</Button>
                </ScrollLink>
            </div>
        </aside>
    </div>
  )
}

export default MobileNav