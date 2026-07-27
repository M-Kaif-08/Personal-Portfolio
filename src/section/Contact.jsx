import React, { useState } from 'react'
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../components/Button"
import { FiSend } from "react-icons/fi";

const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "kaif.sheikh.0820@gmail.com",
    href: "mailto:kaif.sheikh.0820@gmail.com"
  },
  {
    icon: FaPhoneAlt,
    label: "Phone",
    value: "+92 (320) 0426012",
    href: "tel:+923200426012"
  },
  {
    icon: MdLocationOn,
    label: "Location",
    value: "Lahore, Pakistan",
    href: "#"
  },
]

const Contact = () => {

  const [formData, setformData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = async (e) => {

  }

  return (
    <section id='contact' className='py-18 relative overflow-hidden'>
      <div className='container mx-auto px-12 relative z-10'>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif1 italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-12 mx-auto max-w-5xl'>
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in amimation-delay-300'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor="name"
                  className='block text-sm font-medium mb-2'
                >
                  Name
                </label>
                <input
                  id='name'
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setformData({ ...formData, name: e.target.value })}
                  placeholder='Your name...'
                  className='border w-full px-4 py-3 rounded-2xl border-border focus:border-primary/50 outline-none transition-all'
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className='block text-sm font-medium mb-2'
                >
                  Email
                </label>
                <input
                  id='email'
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setformData({ ...formData, email: e.target.value })}
                  placeholder='your@gmail.com'
                  className='border w-full px-4 py-3 rounded-2xl border-border focus:border-primary/50 outline-none transition-all'
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className='block text-sm font-medium mb-2'
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  id='message'
                  type="text"
                  value={formData.message}
                  onChange={(e) => setformData({ ...formData, message: e.target.value })}
                  placeholder='Your message...'
                  className='border w-full px-4 py-3 rounded-2xl border-border focus:border-primary/50 outline-none transition-all resize-none'
                />
              </div>
              <Button classname='w-full' size='lg' type='submit'>Send Message<FiSend className='w-6 h-6' /></Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
