import React from 'react'

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
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
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
    </section>
  )
}

export default Hero
