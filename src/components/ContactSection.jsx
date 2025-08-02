import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming you have a utility function for class names

export const ContactSection = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      alert("Message sent successfully!");
      e.target.reset();
    }, 1500);
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 text-center"> 
                Contact Information
              </h3>
              <div className="space-y-6 justify-center"> 
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-left">Email</h4>
                    <a 
                      href="mailto:fadhillah.adit@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    > 
                      fadhillah.adit@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-left">Phone</h4>
                    <a 
                      href="tel:+45 42 78 92 79"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    > 
                      +45 42 78 92 79
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-left">Location</h4>
                    <a 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    > 
                      Frederiksberg, Denmark
                    </a>
                  </div>
                </div>
              </div>
            
            <div className="pt-8">
              <h4> Socials</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/aditya-fadhillah-427642286" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/fadhillah_adit" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/adityafadhillah21" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2"> Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Hans Hansen..."/>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-input rounded-md bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="hans_hansen@gmail.com"/>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to discuss..."/>
              </div>

              <button type="submit" className={cn(
                "cosmic-button w-full flex items-center justify-center gap-2"
              )}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};