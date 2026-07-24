import React from 'react'
import Button from '../components/Button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-screen overflow-hidden flex items-center'>
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <img
          src="hero-bg.jpg"
          alt="background image  for hero section"
          className='w-full h-full object-cover opacity-50'
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className='absolute inset-0 -z-10 overflow-hidden pointer-events-none'>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1.5 h-1.5 rounded-full opacity-60'
            style={{
              backgroundColor: "#20b2a6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                ComputerScience Student - MERN Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl leading-tight font-bold animate-fade-in animation-delay-200'>
                Developing <span className='text-primary glow-text'>digital</span>
                <br />
                products with
                <br />
                <span className='font-serif1 italic font-normal text-white'>precision.</span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-400'>
                Hi, I'm Muhammad Kaif - a Full Stack Web Developer specializing in
                React, Express.js, Node.js, MonogoDB and Next.js. I build scalable,
                performant web applications.
              </p>
            </div>

            {/* Buttons  */}
            <div>
              <Button size='lg'>
                Contact Me <ArrowRight className='h-5 w-5'/>
              </Button>
            </div>
          </div>
          {/* Right Column - Image Content */}
          <div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
