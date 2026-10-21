/**
 * Requirement 10: Contact Information
 * - Provide an easy way for visitors to contact directly
 * - Include Email address
 * - Include Phone number
 * - Interactive contact message form with beginner-friendly validation
 * 
 * Message Storage:
 * When user submits the form, it opens their email client with:
 * - To: ab.asma1084@gmail.com
 * - Subject: Inquiry from [User Name]
 * - Body: [User Message]
 * 
 * The message is sent via email - stored in Asma's Gmail inbox
 */

import React, { useState } from 'react';
import { contactDetails } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Copy,
  Check,
  Send,
  MapPin,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 border-t border-purple-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300">
            Let's Start a Conversation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-1 mb-3">
            Contact Information
          </h2>
          <p className="text-sm text-slate-400">
            Feel free to reach out directly via email or phone for collaborations, job opportunities, or questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. Email Address Card */}
            <div className="p-6 rounded-2xl bg-[#170a29]/80 border border-purple-900/40 glow-card flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-violet-950/70 border border-violet-800/40 rounded-xl text-violet-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Email Address
                  </h4>
                  <a
                    href={`mailto:${contactDetails.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-violet-300 font-mono transition-colors break-all"
                  >
                    {contactDetails.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(contactDetails.email, 'email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* 2. Phone Number Card */}
            <div className="p-6 rounded-2xl bg-[#170a29]/80 border border-purple-900/40 glow-card flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-3 bg-blue-950/70 border border-blue-800/40 rounded-xl text-blue-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                    Phone Number
                  </h4>
                  <a
                    href={`tel:${contactDetails.phone}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-violet-300 font-mono transition-colors"
                  >
                    {contactDetails.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(contactDetails.phone, 'phone')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Copy phone to clipboard"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* 3. Location info */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2.5 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-violet-400 shrink-0" />
              <span>Based in {contactDetails.location} · Open to remote &amp; on-site roles</span>
            </div>

            {/* 4. GitHub and LinkedIn Profiles */}
            <div className="p-5 rounded-2xl bg-[#170a29]/80 border border-purple-900/40 glow-card space-y-3">
               
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/asmasultana07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/40 hover:bg-violet-950/30 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <img src="/assets/github-blue.png" alt="GitHub" className="w-5 h-5 object-contain" />
                    <span className="text-xs font-semibold text-white group-hover:text-violet-300 font-mono">
                      GitHub
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-300" />
                </a>

                <a
                  href="https://www.linkedin.com/in/asma-9414a9264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-violet-500/40 hover:bg-violet-950/30 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <img src="/assets/linkedin-blue.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
                    <span className="text-xs font-semibold text-white group-hover:text-violet-300 font-mono">
                      LinkedIn  
                    </span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-violet-300" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#170a29]/80 border border-purple-900/40 glow-card">
              <h3 className="text-xl font-bold font-heading text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Have a project idea, question, or job vacancy? Send a message and I'll reply promptly.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-3 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-base font-bold text-white">Thank You, {formData.name || 'Friend'}!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Your message is ready. Click below to open your email client to send it.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={`mailto:${contactDetails.email}?subject=Inquiry from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}`}
                      className="px-5 py-2.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-colors"
                    >
                      Open Email Client
                    </a>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2.5 text-xs font-medium text-slate-300 bg-white/10 hover:bg-white/20 rounded-xl cursor-pointer"
                    >
                      Write Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#11051e] border border-purple-900/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#11051e] border border-purple-900/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Write your message or inquiry here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#11051e] border border-purple-900/40 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 hover:from-violet-500 hover:to-purple-500 shadow-lg shadow-violet-900/40 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
