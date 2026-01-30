import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  MapPin,
  MessageCircleMore,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content:
        "Ring Road Bridge, Near Girls primary school, Ghari qamar din Peshawar",
      link: null,
    },
    {
      icon: MessageCircleMore,
      title: "Phone / WhatsApp",
      content: "+92 335 4343943",
      link: "tel:+923087890019",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@lasect.edu.pk",
      link: "mailto:info@lasect.edu.pk",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Mon - Sat: 9:00 AM - 8:00 PM",
      link: null,
    },
  ];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#0f172a] overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] 
      from-white/10 via-transparent to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-[#00ffb3] mb-6 drop-shadow-[0_0_10px_#00ffb3] fade-in-up">
              Contact Us
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-[#ff9f43] fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-[#0f172a] my-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Content = item.link ? (
                <a
                  href={item.link}
                  className="text-[#00ffb3] hover:underline font-medium"
                >
                  {item.content}
                </a>
              ) : (
                <span className="text-white/80">{item.content}</span>
              );

              return (
                <div
                  key={item.title}
                  className={`academy-card bg-[#1a2238] rounded-3xl p-6 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto rounded-xl bg-[#00ffb3]/10 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#00ffb3]" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#00ffb3] mb-2">
                    {item.title}
                  </h3>
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#0f172a] my-16">
        <div className="container mx-auto px-4">
          <div
            ref={ref}
            className={`grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Form */}
            <div>
              <SectionTitle
                title="Send us a Message"
                subtitle="Have a question? We're here to help."
                align="left"
                titleClassName="text-[#00ffb3]"
                subtitleClassName="text-[#ff9f43]"
              />

              {isSubmitted ? (
                <div className="academy-card text-center py-12 bg-[#1a2238] rounded-3xl shadow-lg">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#00ffb3]/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-[#00ffb3]" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#00ffb3] mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-white/80">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="academy-card space-y-6 bg-[#1a2238] p-6 rounded-3xl shadow-lg"
                >
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block text-[#00ffb3]"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? "border-red-500" : "border-[#00ffb3]/50"
                      } bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffb3]/50 transition-all`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block text-[#00ffb3]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-red-500" : "border-[#00ffb3]/50"
                      } bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffb3]/50 transition-all`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium mb-2 block text-[#00ffb3]"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.subject
                          ? "border-red-500"
                          : "border-[#00ffb3]/50"
                      } bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffb3]/50 transition-all`}
                      placeholder="What is this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block text-[#00ffb3]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message
                          ? "border-red-500"
                          : "border-[#00ffb3]/50"
                      } bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-[#00ffb3]/50 resize-none transition-all`}
                      placeholder="Write your message here..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#00ffb3] text-black font-bold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Map & CTA */}
            <div>
              <SectionTitle
                title="Find Us"
                subtitle="Visit our campus in Peshawar."
                align="left"
                titleClassName="text-[#00ffb3]"
                subtitleClassName="text-[#ff9f43]"
              />

              <div className="academy-card h-80 lg:h-[calc(85%-120px)] overflow-hidden bg-[#1a2238] rounded-3xl shadow-lg">
                <iframe
                  title="LASECT Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106380.01289067015!2d71.41918435!3d33.9959047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917b90f0e79cf%3A0xa816b2637558a412!2sPeshawar%2C%20Khyber%20Pakhtunkhwa%2C%20Pakistan!5e0!3m2!1sen!2s!4v1706000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "0.75rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <a
                href="https://wa.me/923087890019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 mt-6 px-6 py-4 bg-[#25D366] text-white font-semibold rounded-xl transition-all hover:shadow-lg hover:bg-[#1ebe57]"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
