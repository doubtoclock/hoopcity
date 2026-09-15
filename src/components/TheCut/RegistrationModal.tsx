"use client";

import React from 'react';
import Image from 'next/image';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Icons (Inline SVG to avoid missing dependencies)
const Icons = {
  User: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>,
  Calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
  Phone: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  Mail: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
  MapPin: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  Briefcase: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
  Instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>,
  Lock: <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>,
  Globe: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
};

const InputField = ({ icon, label, placeholder, type = "text", rightIcon = null, options = [] }: { icon: React.ReactNode, label: string, placeholder?: string, type?: string, rightIcon?: React.ReactNode, options?: {value: string, label: string}[] }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  return (
    <div className="flex items-center w-full bg-transparent border border-white/10 rounded-2xl px-5 py-4 mb-3 focus-within:border-white/30 transition-colors relative">
      <div className="text-white/40 mr-4 shrink-0">{icon}</div>
      <div className="w-px h-5 bg-white/10 mr-4 shrink-0"></div>
      <span className="text-white/40 font-mono text-[9px] md:text-[10px] tracking-widest uppercase w-24 md:w-32 shrink-0">{label}</span>
      
      {type === "select" ? (
        <div className="flex-1 relative flex justify-end">
          <div 
            className="w-full text-right cursor-pointer text-[9px] md:text-[10px] tracking-widest font-mono uppercase"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={selected ? 'text-white' : 'text-white/50'}>
              {selected ? options.find(o => o.value === selected)?.label : `SELECT ${label}`}
            </span>
          </div>

          {/* Custom Dropdown Menu */}
          {isOpen && (
            <div className="absolute top-full right-0 mt-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              {options.map((opt) => (
                <div 
                  key={opt.value}
                  className="px-6 py-4 text-right text-[9px] md:text-[10px] tracking-widest font-mono uppercase cursor-pointer hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  onClick={() => {
                    setSelected(opt.value);
                    setIsOpen(false);
                  }}
                >
                  <span className={selected === opt.value ? 'text-[#FF6100]' : 'text-white/70 hover:text-white'}>
                    {opt.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <input type={type} placeholder={placeholder} className="bg-transparent outline-none text-white font-mono text-[9px] md:text-[10px] tracking-widest text-right w-full placeholder:text-white/20" />
      )}
      
      {rightIcon && (
        <div 
          className={`text-white/30 ml-4 shrink-0 transition-transform duration-300 ${type === 'select' && isOpen ? 'rotate-180' : ''}`}
          onClick={() => type === 'select' && setIsOpen(!isOpen)}
          style={{ cursor: type === 'select' ? 'pointer' : 'default' }}
        >
          {rightIcon}
        </div>
      )}
    </div>
  );
};

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-[1200px] h-[90vh] md:h-[800px] max-h-full bg-[#080808] rounded-3xl overflow-hidden shadow-2xl flex border border-white/10 animate-in fade-in zoom-in-95 duration-300">
        
        {/* Left Pane (Image & Branding) */}
        <div className="hidden lg:flex w-2/5 relative flex-col justify-between p-12 bg-black border-r border-white/5">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/the-cut/the_cut_1v1_1789300913126.jpg" 
              alt="Night Court" 
              fill 
              className="object-cover opacity-50 mix-blend-luminosity"
            />
            {/* Red overlays to match the cinematic dark red look */}
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-black/40 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
          </div>

          <div className="relative z-10 flex flex-col h-full justify-between">
            {/* Top Left */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-4 h-0.5 bg-red-600"></div>
                <span className="text-white font-mono text-[10px] tracking-[0.2em] uppercase">HOOP CITY™</span>
              </div>
              <div className="flex flex-col font-mono text-[8px] text-white/50 tracking-[0.2em] uppercase">
                <span>BASKETBALL</span>
                <span>CULTURE</span>
                <span>COMMUNITY</span>
              </div>
            </div>

            {/* Center Massive Text */}
            <div className="my-auto">
              <h2 className="text-white font-trona text-6xl xl:text-7xl leading-[0.9] drop-shadow-2xl">
                BE A<br/>PART<br/>OF THE<br/>CITY<span className="text-red-600">.</span>
              </h2>
            </div>

            {/* Bottom Left */}
            <div className="flex flex-col gap-12">
              <div className="flex flex-col">
                <div className="w-6 h-0.5 bg-red-600 mb-4"></div>
                <div className="flex flex-col font-mono text-[9px] text-white/60 tracking-[0.15em] uppercase leading-relaxed">
                  <span>PLAYERS.</span>
                  <span>CREATORS.</span>
                  <span>BUILDERS.</span>
                  <span>THE CITY NEEDS YOU.</span>
                </div>
              </div>

              <div className="flex items-end justify-between w-full">
                <div className="flex flex-col font-mono text-[8px] text-white/40 tracking-[0.2em] uppercase">
                  <span>NAGPUR / INDIA</span>
                  <span>SEASON 001</span>
                </div>
                <div className="text-white/20">
                  {Icons.Globe}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Pane (Form) */}
        <div className="w-full lg:w-3/5 relative flex flex-col p-6 md:p-12 overflow-y-auto bg-[#0a0a0a]">
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Form Header */}
          <div className="flex flex-col md:flex-row md:items-start justify-between w-full mb-10 mt-4 md:mt-0 gap-6">
            <div className="flex flex-col">
              <h3 className="text-white font-mono text-xl md:text-2xl tracking-[0.3em] uppercase mb-4">
                JOIN HOOP CITY™
              </h3>
              <div className="flex items-center gap-4">
                <div className="w-6 h-0.5 bg-red-600"></div>
                <span className="text-white/40 font-mono text-[9px] tracking-[0.2em] uppercase">REGISTER AND BE PART OF THE MOVEMENT.</span>
              </div>
            </div>

            <div className="hidden md:flex flex-col pl-6 border-l border-white/10 font-mono text-[8px] text-white/40 tracking-[0.2em] uppercase h-max">
              <span>SEASON 001</span>
              <span>NAGPUR / INDIA</span>
            </div>
          </div>

          {/* Form Inputs */}
          <form className="flex flex-col flex-1" onSubmit={(e) => e.preventDefault()}>
            
            <InputField icon={Icons.User} label="FULL NAME" placeholder="e.g. Ayush Sanjay" />
            
            <InputField icon={Icons.Calendar} label="DATE OF BIRTH" placeholder="dd - mm - yyyy" rightIcon={Icons.Calendar} />
            
            <InputField icon={Icons.Phone} type="tel" label="PHONE" placeholder="+91 98765 43210" />
            
            <InputField icon={Icons.Mail} type="email" label="EMAIL" placeholder="you@domain.com" />
            
            <InputField icon={Icons.MapPin} label="CITY" placeholder="e.g. Nagpur" />
            
            <InputField 
              icon={Icons.Briefcase} 
              type="select" 
              label="POSITION" 
              options={[
                { value: 'pg', label: 'POINT GUARD' },
                { value: 'sg', label: 'SHOOTING GUARD' },
                { value: 'sf', label: 'SMALL FORWARD' },
                { value: 'pf', label: 'POWER FORWARD' },
                { value: 'c', label: 'CENTER' }
              ]}
              rightIcon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>} 
            />

            <InputField 
              icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>} 
              type="select" 
              label="JERSEY SIZE" 
              options={[
                { value: 's', label: 'SMALL (S)' },
                { value: 'm', label: 'MEDIUM (M)' },
                { value: 'l', label: 'LARGE (L)' },
                { value: 'xl', label: 'EXTRA LARGE (XL)' },
                { value: 'xxl', label: 'DOUBLE XL (XXL)' }
              ]}
              rightIcon={<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"></polyline></svg>} 
            />
            
            <InputField icon={Icons.Instagram} label="SOCIAL HANDLE" placeholder="@username" />
            
            <div className="mt-auto pt-6 flex flex-col gap-4">
              
              {/* Submit Button */}
              <button 
                type="button"
                className="w-full relative group overflow-hidden rounded-2xl transition-transform hover:scale-[1.01]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#5a0000] via-[#c21515] to-[#5a0000]"></div>
                
                {/* Tech Frame inside button */}
                <div className="relative px-6 py-5 flex items-center justify-center gap-4 text-white font-mono text-[10px] md:text-xs tracking-[0.2em]">
                  <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/30"></div>
                  <div className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-white/30"></div>
                  <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/30"></div>
                  <div className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-white/30"></div>
                  
                  REGISTER - ₹350 <span className="font-sans text-lg leading-none -mt-1 ml-1">→</span>
                </div>
              </button>
              
              {/* Footer info */}
              <div className="flex items-center justify-between w-full px-2">
                <div className="flex items-center gap-2 text-white/30 font-mono text-[8px] tracking-[0.2em] uppercase">
                  {Icons.Lock}
                  <span>YOUR INFORMATION IS SAFE WITH US.</span>
                </div>
                
                <div className="flex items-center gap-4 text-white/20 font-mono text-[7px] tracking-[0.3em] uppercase">
                  <div className="w-8 h-px bg-white/10 hidden md:block"></div>
                  <span>FOR THE PLOT™.</span>
                </div>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
