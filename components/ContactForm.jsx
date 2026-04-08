'use client';

import { useState } from 'react';

export default function ContactForm({ dark = false }) {
  const [form, setForm] = useState({
    firstName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    /* 
      TODO: Replace this with a real form handler.
      Options:
        1. Formspree  → https://formspree.io  (free tier, no backend needed)
        2. EmailJS    → https://emailjs.com   (sends directly from browser)
        3. Next.js API route → /app/api/contact/route.js
      
      Example with Formspree:
        const res = await fetch('https://formspree.io/f/YOUR_ID', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (res.ok) setStatus('success'); else setStatus('error');
    */

    // Simulate success for now
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const inputClass = `input-field ${dark ? 'bg-white/10 border-white/20 text-white placeholder-white/30 focus:border-gold' : ''}`;

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mb-5">
          <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`font-display text-2xl font-light mb-2 ${dark ? 'text-white' : 'text-charcoal'}`}>
          Message Received
        </h3>
        <p className={`text-sm ${dark ? 'text-white/50' : 'text-muted'}`}>
          Our team will get back to you within 4 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className={inputClass}
          type="text"
          name="firstName"
          placeholder="First Name *"
          value={form.firstName}
          onChange={handle}
          required
        />
        <input
          className={inputClass}
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={form.phone}
          onChange={handle}
          required
        />
      </div>
      <input
        className={inputClass}
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handle}
      />
      <input
        className={inputClass}
        type="text"
        name="subject"
        placeholder="Subject / Property Interest"
        value={form.subject}
        onChange={handle}
      />
      <textarea
        className={inputClass}
        name="message"
        placeholder="Your message..."
        rows={4}
        value={form.message}
        onChange={handle}
        style={{ resize: 'none' }}
      />
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-gold w-full justify-center disabled:opacity-60"
      >
        {status === 'sending' ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
            </svg>
            Sending…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
