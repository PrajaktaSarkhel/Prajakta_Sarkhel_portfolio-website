import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const emailAddress = 'prajaktasarkhel@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:${emailAddress}?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailtoLink;
    setFormStatus('Opening your default email client... 🚀');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormStatus('');
    }, 3000);
  };

  const socials = [
    { name: 'GitHub', href: 'https://github.com/PrajaktaSarkhel', icon: Github, handle: '@PrajaktaSarkhel' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prajakta-sarkhel', icon: Linkedin, handle: 'Prajakta Sarkhel' },
    { name: 'Twitter / X', href: 'https://x.com/@me_sinisterr', icon: Twitter, handle: '@me_sinisterr' },
    { name: 'Instagram', href: 'https://instagram.com/@me_sinister', icon: Instagram, handle: '@me_sinister' },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <SectionHeading
        badge="Get in Touch"
        title="Let's Build Something"
        highlight="Remarkable"
        subtitle="Always open to discussing software engineering roles, research collaborations, internships, and interesting tech ideas."
      />

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & Copy Email (Span 5) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Quick Copy Email Card */}
          <SpotlightCard className="p-8" spotlightColor="rgba(0, 229, 255, 0.15)">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">Direct Inbox</span>
                <p className="text-xs text-slate-500 dark:text-slate-400">Average response time: &lt; 24h</p>
              </div>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-300 dark:border-white/10 flex items-center justify-between gap-2 shadow-inner">
              <span className="text-xs sm:text-sm font-mono font-medium text-slate-900 dark:text-white truncate">
                {emailAddress}
              </span>
              <button
                onClick={copyEmailToClipboard}
                aria-label="Copy email address"
                className="flex-shrink-0 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition-all active:scale-95 shadow-glow-cyan"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </SpotlightCard>

          {/* Social Profiles Grid */}
          <SpotlightCard className="p-8" spotlightColor="rgba(99, 102, 241, 0.12)">
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
              Connect on Socials
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 border border-slate-300 dark:border-white/10 flex items-center gap-3 transition-all hover:scale-[1.02] group shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                    <div className="truncate">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {social.name}
                      </p>
                      <p className="text-[10px] font-mono text-slate-500 dark:text-slate-400 truncate">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </SpotlightCard>

        </div>

        {/* Right Column: Contact Message Form (Span 7) */}
        <div className="lg:col-span-7">
          <SpotlightCard className="p-8 sm:p-10" spotlightColor="rgba(0, 229, 255, 0.12)">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                  Fill in the details below to open your email client
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all font-sans shadow-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all font-sans shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hi Prajakta, let's discuss an engineering role / collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all resize-none font-sans shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-glow-cyan transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {formStatus && (
                <p className="text-center text-xs font-mono text-cyan-600 dark:text-cyan-400 pt-2 animate-pulse">
                  {formStatus}
                </p>
              )}
            </form>
          </SpotlightCard>
        </div>

      </div>
    </section>
  );
}
