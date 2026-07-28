import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../components/Button"
import { FiSend, FiAlertTriangle } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";

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

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLETE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message send successfully! I'll get back to you soon"
      });
      setformData({ name: "", email: "", message: "" });

    } catch (err) {
      console.error("Emailjs error:", err)
      setSubmitStatus({
        type: "Error",
        message: err.text || "Failed to send message. Please try again later."
      });
    } finally {
      setIsLoading(false);
    }
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
            <form className='space-y-6' onSubmit={handleSubmit}>
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
              <Button classname='w-full' size='lg' type='submit' disabled={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) :
                  (
                    <>Send Message<FiSend className='w-5 h-5' /></>
                  )
                }
              </Button>
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3
                     p-4 rounded-xl ${submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                >
                  {submitStatus.type === "success" ? (
                    <FaRegCircleCheck className="w-5 h-5 shrink-0" />
                  ) : (
                    <FiAlertTriangle className="w-5 h-5 shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
