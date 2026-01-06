import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link href='/'>
            <div className='flex items-center cursor-pointer gap-2.5'>
                <Image
                src="/images/logo.svg"
                alt='logo'
                height={44}
                width={46}
                />
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems/>
            <SignedOut>
    
                <SignInButton>
                  <button className='btn-signin'>Sign In</button>
                </SignInButton>
           
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
        </div>
    </nav>
  )
}

export default Navbar
