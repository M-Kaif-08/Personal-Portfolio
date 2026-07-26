import React from 'react'
import { FiGithub } from "react-icons/fi";
import AnimatedBorderButton from "../components/AnimatedBorderButton"
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "SnapURL",
    description: "Modern URL shortener built with Next.js, React, and MongoDB for fast and easy link management.",
    image: "/projects/snapUrl.png",
    tags: ["Next.js", "MongoDB"],
    github: "https://github.com/M-Kaif-08/snap-url.git"
  },
  {
    title: "VaultLock",
    description: "A React-based password manager with Local Storage, password visibility toggle, copy-to-clipboard, edit, and delete functionality.",
    image: "/projects/vaultLock.png",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/M-Kaif-08/VaultLock.git"
  },
  {
    title: "Todo App",
    description: "Todo App is a responsive React.js task manager that lets users add, edit, complete, and delete daily tasks. With a clean interface and browser Local Storage, your tasks stay saved even after refreshing.",
    image: "/projects/todoApp.png",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/M-Kaif-08/Todo-app.git"
  }
]

const Project = () => {
  return (
    <section id='projects' className='md:py-18 py-10 relative overflow-hidden'>
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className='container mx-auto px-12 relative z-10'>
        {/* Header Section */}
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in uppercase'>
            Featured Work
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-200 text-secondary-foreground'>
            Projects that
            <span className='text-white font-serif1 italic font-normal'>
              {" "}make an impact.
            </span>
          </h2>
        </div>
        {/* Project Grid */}
        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Projects Images */}
              <div className='relative overflow-hidden aspect-video'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <a href={project.github} target='_blank' className='p-3 bg-gray-300 rounded-full hover:bg-primary'>
                    <FiGithub className='w-5 h-5 text-black' />
                  </a>
                </div>
              </div>
              {/* content */}
              <div className='p-6 space-y-3'>
                <div>
                  <h3 className='text-xl font-semibold group-hover:text-primary'>
                    {project.title}
                  </h3>
                </div>
                <p className='text-muted-foreground text-sm'>
                  {project.description}
                </p>
                <div className='flex flex-wrap gap-3'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='bg-surface px-5 py-2 rounded-full text-xs font-medium border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all the Projects */}
        <div className='text-center mt-12 animate-fade-in animation-delay-500'>
          <AnimatedBorderButton>
            <a href="https://github.com/M-Kaif-08" target='_blank'>View All Projects</a><MdArrowOutward className='w-6 h-6' />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Project
