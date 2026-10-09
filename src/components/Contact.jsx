import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram, Send, Copy, Check, Sparkles, MessageSquare, Loader2, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import CarouselReveal from './ui/CarouselReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const emailAddress = 'prajaktasarkhel@gmail.com';

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/27e8435c8dabf579f2f0798693871577', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true || data.message)) {
        setFormStatus({
          type: 'success',
          message: "Message sent directly to Prajakta's inbox! Thank you for reaching out."
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setFormStatus({
        type: 'error',
        message: 'Could not send automatically. You can click below to compose in Gmail Web directly.'
      });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { name: 'GitHub', href: 'https://github.com/PrajaktaSarkhel', icon: Github, handle: '@PrajaktaSarkhel' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/prajakta-sarkhel', icon: Linkedin, handle: 'Prajakta Sarkhel' },
    { name: 'Twitter / X', href: 'https://x.com/@me_sinisterr', icon: Twitter, handle: '@me_sinisterr' },
    { name: 'Instagram', href: 'https://instagram.com/@me_sinister', icon: Instagram, handle: '@me_sinister' },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
      <CarouselReveal direction="up">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Something"
          highlight="Remarkable"
          subtitle="Always open to discussing software engineering roles, research collaborations, internships, and interesting tech ideas."
        />
      </CarouselReveal>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Links & Copy Email (Span 5) */}
        <CarouselReveal direction="left" stagger className="lg:col-span-5 space-y-6">
          
          {/* Quick Copy Email Card */}
          <SpotlightCard className="carousel-card p-8" spotlightColor="rgba(0, 229, 255, 0.15)">
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

            <div className="mt-3 flex items-center justify-between text-xs font-mono px-1">
              <span className="text-slate-500 dark:text-slate-400">Prefer browser webmail?</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-cyan-600 dark:text-cyan-400 hover:underline font-medium"
              >
                <span>Open Gmail in Web</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </SpotlightCard>

          {/* Social Profiles Grid */}
          <SpotlightCard className="carousel-card p-8" spotlightColor="rgba(99, 102, 241, 0.12)">
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

        </CarouselReveal>

        {/* Right Column: Contact Message Form (Span 7) */}
        <CarouselReveal direction="right" className="lg:col-span-7">
          <SpotlightCard className="carousel-card p-8 sm:p-10" spotlightColor="rgba(0, 229, 255, 0.12)">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                  Send a Direct Message
                </h3>
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
                    disabled={loading}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all font-sans shadow-sm disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    disabled={loading}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all font-sans shadow-sm disabled:opacity-60"
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
                  disabled={loading}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Let's discuss an engineering role / collaboration..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/5 border-2 border-slate-300 dark:border-white/15 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:bg-white dark:focus:bg-white/10 transition-all resize-none font-sans shadow-sm disabled:opacity-60"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 shadow-glow-cyan transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {formStatus.message && (
                <div
                  className={`p-4 rounded-xl border text-xs font-mono flex items-start gap-3 transition-all ${
                    formStatus.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-emerald-500" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-rose-500" />
                  )}
                  <div className="flex-1 space-y-2">
                    <p className="leading-relaxed">{formStatus.message}</p>
                    {formStatus.type === 'error' && (
                      <div className="pt-1 flex flex-wrap gap-2">
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent('Message from ' + (formData.name || 'Portfolio Visitor'))}&body=${encodeURIComponent(formData.message || '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-slate-950 font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-sm"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Compose in Gmail (Browser)</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </form>
          </SpotlightCard>
        </CarouselReveal>

      </div>
    </section>
  );
}
