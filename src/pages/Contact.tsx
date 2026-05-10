import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => (
  <div className="bg-slate-50 min-h-screen pt-32 pb-24">
    <div className="container mx-auto px-4 max-w-6xl">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8">
          Get in <span className="text-brand-blue">Touch</span>
        </h1>
        <p className="text-slate-500 text-lg font-medium leading-relaxed">
          Have a question about an opportunity or want to list your business? Our team is ready to assist you in navigating the Bethal digital ecosystem.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-tight">Send us a Message</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5 focus-within:text-brand-blue transition-colors">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Your Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 focus:bg-white outline-none transition-all font-medium" 
                  placeholder="John Doe" 
                />
              </div>
              <div className="space-y-1.5 focus-within:text-brand-blue transition-colors">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 focus:bg-white outline-none transition-all font-medium" 
                  placeholder="john@example.com" 
                />
              </div>
              <div className="md:col-span-2 space-y-1.5 focus-within:text-brand-blue transition-colors">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 focus:bg-white outline-none transition-all font-medium" 
                  placeholder="What is this about?" 
                />
              </div>
              <div className="md:col-span-2 space-y-1.5 focus-within:text-brand-blue transition-colors">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 px-1">Message</label>
                <textarea 
                  rows={5} 
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-brand-blue/10 focus:bg-white outline-none transition-all font-medium resize-none" 
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>
              <div className="md:col-span-2 pt-4">
                <button className="flex items-center justify-center gap-2 px-10 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-brand-blue transition-all shadow-lg active:scale-95 group">
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6 tracking-tight">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-50 text-brand-blue rounded-lg flex items-center justify-center shrink-0 border border-blue-100">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Our Location</p>
                  <p className="text-slate-700 font-bold">123 Market Street, Bethal CBD<br/>Mpumalanga, 2310</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-50 text-brand-accent rounded-lg flex items-center justify-center shrink-0 border border-emerald-100">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Email Support</p>
                  <p className="text-slate-700 font-bold">info@bethalhub.co.za</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-50 text-brand-orange rounded-lg flex items-center justify-center shrink-0 border border-orange-100">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">Call Us</p>
                  <p className="text-slate-700 font-bold">+27 17 000 0000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6 tracking-tight flex items-center gap-2">
                <Clock size={20} className="text-brand-accent" />
                Operating Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-slate-400 font-bold text-xs uppercase">Mon - Fri</span>
                  <span className="font-bold">08:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-slate-400 font-bold text-xs uppercase">Sat - Sun</span>
                  <span className="font-bold">09:00 - 13:00</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact;
