'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle, ArrowRight, Box } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full-time / Internship',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate submission / mailto link
    const mailto = `mailto:siddharthsingh.6217@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry: ${formData.projectType}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--color-ivory)] border-t border-black/[0.06]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Heading & Contact info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#8F2A24] font-semibold">
                Get In Touch
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-[#181311] leading-tight">
                LET&apos;S CREATE SOMETHING EXTRAORDINARY
              </h2>
              <p className="mt-4 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Have a project in mind, an internship opportunity, or looking for a full-stack engineer? I&apos;d love to hear from you.
              </p>
            </div>

            <div className="mt-8 space-y-3 pt-6 border-t border-black/[0.06]">
              <a
                href="mailto:siddharthsingh.6217@gmail.com"
                className="flex items-center gap-3 text-xs sm:text-sm text-stone-700 hover:text-[#8F2A24] transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-black/[0.04]">
                  <Mail size={14} className="text-[#8F2A24]" />
                </div>
                <span>siddharthsingh.6217@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-xs sm:text-sm text-stone-700">
                <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-black/[0.04]">
                  <MapPin size={14} className="text-[#D7A66D]" />
                </div>
                <span>Patna, Bihar, India</span>
              </div>
            </div>
          </div>

          {/* Middle Column: Clean Contact Form */}
          <div className="lg:col-span-5 bg-[#EFE8DE]/60 rounded-md border border-black/[0.06] p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={40} className="text-emerald-600 mb-3" />
                <h3 className="text-base font-bold text-[#181311]">Message Initialized</h3>
                <p className="mt-1 text-xs text-stone-500 max-w-xs">
                  Your email client has been opened. Thank you for reaching out!
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs text-[#8F2A24] font-semibold underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono font-medium text-stone-600 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-sm border border-black/[0.08] bg-white px-3 py-2 text-xs text-[#181311] placeholder:text-stone-400 focus:border-[#8F2A24] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono font-medium text-stone-600 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-sm border border-black/[0.08] bg-white px-3 py-2 text-xs text-[#181311] placeholder:text-stone-400 focus:border-[#8F2A24] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-medium text-stone-600 mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full rounded-sm border border-black/[0.08] bg-white px-3 py-2 text-xs text-[#181311] focus:border-[#8F2A24] focus:outline-none"
                  >
                    <option value="Full-time Opportunity">Full-time Engineering Role</option>
                    <option value="Internship Role">Software Internship</option>
                    <option value="Contract / Freelance">Contract / Project Build</option>
                    <option value="General Collaboration">General Chat & Networking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-medium text-stone-600 mb-1">
                    Tell me about your project
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Briefly describe what you're working on or looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-sm border border-black/[0.08] bg-white p-3 text-xs text-[#181311] placeholder:text-stone-400 focus:border-[#8F2A24] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-sm bg-[#8F2A24] text-white py-3 px-6 text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-[#8F2A24]/90 hover:shadow-md"
                >
                  <span>Send Message</span>
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Availability Graphic Card */}
          <div className="lg:col-span-3 rounded-md border border-black/[0.06] bg-[#EFE8DE]/60 p-6 flex flex-col justify-between h-full min-h-[280px]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-800 font-bold">
                CURRENT STATUS
              </span>
            </div>

            {/* Stylized Architectural Geometric Graphic */}
            <div className="my-6 flex items-center justify-center py-4">
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 rounded-sm border-2 border-black/[0.1] rotate-12" />
                <div className="absolute inset-0 rounded-sm border-2 border-[#8F2A24]/30 -rotate-6" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-sm bg-[#181311] text-[#F6EFE6] font-mono text-sm font-bold">
                  SS
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06]">
              <p className="text-xs font-bold text-[#181311]">
                Available for Full-Time &amp; High-Impact Contract Builds
              </p>
              <p className="text-[11px] text-stone-500 mt-1 font-mono">
                Patna / Remote Worldwide
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
