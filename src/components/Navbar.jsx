import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {

  const [MobileMenuBtn, setMobileMenuBtn] = useState(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" }
  ]
  return (
    <header className='fixed left-0 top-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'>
        <a href='#' className='text-xl font-bold tracking-tight hover:text-primary'>
          MK<span className='text-primary'>.</span>
        </a>
        {/* Desktop nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <a key={index} href={link.href} className='px-4 py-2 text-sm text-muted-foreground rounded-full hover:text-foreground hover:bg-surface'>{link.label}</a>
            ))}
          </div>
        </div>
        <div className='hidden md:block'>
          <Button size='sm'>Contact Me</Button>
        </div>
        {/* Mobile Menu button */}
        <button onClick={() => setMobileMenuBtn((prev) => !prev)} className='md:hidden p-2 text-foreground cursor-pointer'>
          {MobileMenuBtn ? <X /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {MobileMenuBtn && <div className='md:hidden glass-strong animate-fade-in'>
        <div className='container mx-auto flex flex-col p-6 gap-3'>
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className='py-2 text-lg text-muted-foreground hover:text-foreground'>{link.label}</a>
          ))}
          <Button>Contact Me</Button>
        </div>
      </div>
      }
    </header>
  )
}

export default Navbar
