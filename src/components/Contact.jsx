
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    permission: false,
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.permission) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY_HERE',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
          permission: false,
        });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const contactInfo = [
    { label: 'Email', value: 'your.email@gmail.com', href: 'mailto:your.email@gmail.com' },
    { label: 'Phone', value: '+91 12345 67890', href: 'tel:+911234567890' },
    { label: 'Location', value: 'India · Remote', href: null },
  ];

  const socials = [
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://linkedin.com/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
  ];

  return (
    <section
      ref={formRef}
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full bg-zinc-950 py-24 md:py-32 overflow-hidden"
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:70px_70px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_80%)] pointer-events-none"
      />

      {/* Theme gradient glow — top left */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-20"
        style={{ background: 'linear-gradient(135deg, #ff2f92, #ff5f78)' }}
      />
      {/* Theme gradient glow — bottom right */}
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none opacity-15"
        style={{ background: 'linear-gradient(135deg, #ff5f78, #ff2f92)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 border-b border-zinc-800/80 pb-10 md:pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-[11px] text-zinc-500 uppercase tracking-[0.25em] mb-6">
              <span className="w-6 h-px bg-zinc-700" />
              Get in touch
            </div>
            <h2
              id="contact-heading"
              className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.98]"
            >
              Let&apos;s make
              <br />
              <span
                className="italic font-serif bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #ff2f92, #ff5f78)',
                }}
              >
                something
              </span>{' '}
              great.
            </h2>
          </div>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm md:text-right">
            Have a project, an idea, or just want to say hi? Drop a message and
            I&apos;ll get back to you soon.
          </p>
        </motion.header>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left column — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <p className="text-zinc-400 text-base leading-relaxed mb-12 max-w-md">
                Open to freelance work, full-time roles, and interesting
                collaborations. If it&apos;s about building something on the
                web, I&apos;m in.
              </p>

              {/* Contact list */}
              <div className="flex flex-col gap-8 mb-16">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group inline-flex items-center gap-2 text-white text-lg md:text-xl tracking-tight w-fit"
                      >
                        <span className="relative">
                          {item.value}
                          <span
                            className="absolute -bottom-1 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
                            style={{
                              backgroundImage:
                                'linear-gradient(90deg, #ff2f92, #ff5f78)',
                            }}
                          />
                        </span>
                        <svg
                          className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M7 17L17 7M17 7H8M17 7v9"
                          />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-white text-lg md:text-xl tracking-tight">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-600 block mb-4">
                Elsewhere
              </span>
              <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-white transition-colors duration-300"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right column — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="relative rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm p-8 md:p-10 overflow-hidden"
            >
              {/* Accent top line */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  backgroundImage:
                    'linear-gradient(90deg, transparent, #ff2f92, #ff5f78, transparent)',
                }}
              />

              {/* Row 1 — first + last name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <Field
                  id="firstName"
                  label="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Field
                  id="lastName"
                  label="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Row 2 — email + phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
                <Field
                  id="email"
                  type="email"
                  label="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Field
                  id="phone"
                  type="tel"
                  label="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  maxLength={10}
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="block text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me a bit about what you have in mind..."
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 text-base md:text-lg text-white placeholder-zinc-600 focus:outline-none focus:border-transparent transition-colors resize-none"
                  style={{ borderImage: 'none' }}
                  onFocus={(e) => {
                    e.target.style.borderImage =
                      'linear-gradient(90deg, #ff2f92, #ff5f78) 1';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderImage = 'none';
                  }}
                />
              </div>

              {/* Permission */}
              <div
                className="flex items-start gap-3 mb-10 cursor-pointer select-none group"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    permission: !prev.permission,
                  }))
                }
              >
                <div
                  className={`mt-0.5 w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    formData.permission
                      ? 'border-transparent'
                      : 'border-zinc-600 group-hover:border-zinc-500'
                  }`}
                  style={
                    formData.permission
                      ? {
                          backgroundImage:
                            'linear-gradient(135deg, #ff2f92, #ff5f78)',
                        }
                      : undefined
                  }
                >
                  {formData.permission && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-sm text-zinc-400 leading-snug">
                  I give permission to be contacted at this email address.
                </span>
              </div>

              {/* Submit + status */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white text-sm uppercase tracking-[0.15em] overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    style={{
                      backgroundImage:
                        'linear-gradient(90deg, #ff2f92, #ff5f78)',
                    }}
                  />
                  <span className="relative z-10">
                    {status === 'sending' ? 'Sending...' : 'Send message'}
                  </span>
                  <svg
                    className="relative z-10 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h14M13 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-emerald-400"
                  >
                    Thanks! Your message was sent.
                  </motion.p>
                )}
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-rose-400"
                  >
                    {formData.permission
                      ? 'Something went wrong. Try again.'
                      : 'Please accept the permission checkbox.'}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* --- Reusable input field --- */
const Field = ({ id, label, type = 'text', value, onChange, ...rest }) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 mb-3"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent border-b border-zinc-800 pb-3 text-base md:text-lg text-white placeholder-zinc-600 focus:outline-none transition-colors"
        onFocus={(e) => {
          e.target.style.borderImage =
            'linear-gradient(90deg, #ff2f92, #ff5f78) 1';
        }}
        onBlur={(e) => {
          e.target.style.borderImage = 'none';
        }}
        {...rest}
      />
    </div>
  );
};

export default Contact;