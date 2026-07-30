import React from 'react'
import Button from '../components/Button'
import AnimatedBorderButton from '../components/AnimatedBorderButton'
import { ArrowRight, Download } from 'lucide-react'
import { FiGithub, FiInstagram } from "react-icons/fi";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwnd CSS",
  "Vercel",
  "Git",
  "GitHub Actions"
];

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
      <div className='container mx-auto px-6 pt-24 pb-20 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Text Content */}
          <div className='space-y-8 md:px-12'>
            <div className='animate-fade-in'>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
                Full Stack Developer - React & Next.js Enthusiast
              </span>
            </div>

            {/* Headline */}
            <div className='space-y-4'>
              <h1 className='text-5xl md:text-6xl lg:text-7xl leading-tight font-bold animate-fade-in animation-delay-100'>
                Developing <span className='text-primary glow-text'>digital</span>
                <br />
                products with
                <br />
                <span className='font-serif1 italic font-normal text-white'>precision.</span>
              </h1>
              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300'>
                Hi, I'm Muhammad Kaif - Full Stack Web Developer. I build fast, scalable web applications using React, Next.js, Node.js, Express, and MongoDB.
              </p>
            </div>

            {/* Buttons  */}
            <div className='flex flex-wrap gap-5 justify-center items-center animate-fade-in animation-delay-400'>
              <a href="#contact">
                <Button size='lg'>
                  Contact Me <ArrowRight className='h-5 w-5' />
                </Button>
              </a>
              <AnimatedBorderButton>
                <Download className='h-5 w-5' />
                Download CV
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className='flex items-center justify-center gap-4 animate-fade-in animation-delay-500'>
              <span className='text-muted-foreground'>Follow Me:</span>
              {[
                { icon: FiGithub, href: "https://github.com/M-Kaif-08" },
                { icon: FiInstagram, href: "https://www.instagram.com/kaif_sheikh_08" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  className='p-2 rounded-full glass bg-primary/10 hover:text-primary transition-all duration-300'
                >
                  < social.icon className='h-5 w-5' />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image Content */}
          <div className='relative animate-fade-in animation-delay-300'>
            {/* Profile Image */}
            <div className='relative max-w-md mx-auto'>
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src="Profile-pic.png" alt="Muhammad Kaif" className='w-full aspect-4/5 object-cover rounded-2xl' />
                {/* Floating Badge */}
                <div className='absolute -bottom-4 -right-4 glass rounded-lg px-4 py-2 animate-float'>
                  <div className='flex items-center gap-3'>
                    <div className='w-3 h-3 rounded-full bg-green-400 animate-pulse' />
                    <span className='font-medium text-sm'>Avaliable for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills section */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee'>
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className='shrink-0 px-10 py-4'>
                  <span className='text-lg font-semibold text-muted-foreground hover:text-primary-foreground transition-colors'>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
