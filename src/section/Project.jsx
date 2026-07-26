import React from 'react'

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
      </div>
    </section>
  )
}

export default Project
