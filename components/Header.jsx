'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"



const Header = () => {

    const [active, setActive] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 80 ? setActive(true) : setActive(false)
        })
    })



  return (
    <header className={`${active ? 'bg-black-heavy py-4' : 'bg-none py-8'}
    fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}>
        <div className="container mx-auto">
            <div className="flex items-center justify-between ">
            {/* logo, nav and btn */}
            <Link href='/'>
            <Image
            src='/logo.svg' width={75} height={30} alt="logo"
            />
            </Link>
            {/* nav */}
            <Nav 
            containerStyles='hidden xl:flex  gap-x-12 text-white'
            linkStyles='capitalize'
            />
            {/* btn */}
            <ScrollLink to="reservation" smooth={true}>
            <Button variant='orange' size='sm'>
                Book a table</Button>
            </ScrollLink>
            {/* MobileNav */}
            <MobileNav
            containerStyles='xl:hidden'
            iconStyles='text-3xl'
            linkStyles='uppercase text-white'
            />
        </div>
        </div>
    </header>
  )
}

export default Header