import React from 'react'
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa';

const highlights = [
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description:
      "Optimizing for speed and delivering lightning-fast user experiences.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

const About = () => {
  return (
    <section id='about' className='py-18 relative overflow-hidden'>
      <div className='container mx-auto px-12 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Highlight */}
          <div className='space-y-8'>
            <div className='animate-fade-in'>
              <span className='text-secondary-foreground text-md font-medium tracking-wide uppercase'>
                About Me
              </span>
            </div>
            <h2 className='text-secondary-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100'>
              Building Modern Web Applications<span className='text-white font-serif1 italic font-normal'> with Clean Code and Thoughtful Design</span>
            </h2>
            <div className='space-y-4 text-muted-foreground animate-fade-in animation-delay-200'>
              <p>
                I'm a passionate Full-Stack Web Developer who enjoys building modern, responsive, and user-focused web applications. I love turning ideas into real-world solutions through clean, maintainable code and thoughtful design, creating digital experiences that are both functional and visually engaging.
              </p>
              <p>
                My tech stack includes HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Git, and GitHub. I'm always learning new technologies and believe great software is built through continuous learning, attention to detail, and a problem-solving mindset.
              </p>
              <p>
                Whether I'm building personal projects, exploring new technologies, or improving existing applications, I focus on writing efficient, high-quality code. My goal is to grow as a software engineer, collaborate with talented teams, and build solutions that create a positive impact.
              </p>
            </div>
          </div>
          {/* Right Column - Highlight */}
          <div className='grid lg:grid-cols-2 gap-6'>
            {highlights.map((item, index) => (
              <div
                key={index}
                className='glass p-6 rounded-2xl animate-fade-in'
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className='w-12 h-12 rounded-2xl bg-primary/10 flex justify-center items-center mb-4 hover:bg-primary/30'>
                  <item.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='glass glow-border mt-10 p-6 rounded-2xl animate-fade-in animation-delay-300'>
          <p className='text-lg font-medium text-foreground italic'>
            "My mission is to build high-quality, user-focused web applications that solve real-world problems. I'm committed to continuous learning, writing clean code, and creating solutions that make a meaningful impact."
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
