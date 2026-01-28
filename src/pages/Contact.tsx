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
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 fade-in-up">
              Contact Us
            </h1>
            <p
              className="text-lg text-white/80 fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              We'd love to hear from you. Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const Content = item.link ? (
                <a href={item.link} className="text-primary hover:underline">
                  {item.content}
                </a>
              ) : (
                <span className="text-foreground">{item.content}</span>
              );

              return (
                <div
                  key={item.title}
                  className="academy-card text-center fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  {Content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
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
              />

              {isSubmitted ? (
                <div className="academy-card text-center py-12">
                  <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-sm font-medium mb-2 block"
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
                        errors.name ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium mb-2 block"
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
                        errors.email ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium mb-2 block"
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
                        errors.subject ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50`}
                      placeholder="What is this about?"
                    />
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="text-sm font-medium mb-2 block"
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
                        errors.message ? "border-red-500" : "border-border"
                      } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none`}
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
                    className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-2"
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

            {/* Map */}
            <div>
              <SectionTitle
                title="Find Us"
                subtitle="Visit our campus in Peshawar."
                align="left"
              />

              <div className="academy-card h-80 lg:h-[calc(100%-120px)] overflow-hidden">
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

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923087890019"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 mt-6 px-6 py-4 bg-green-600 text-white font-semibold rounded-xl transition-all hover:bg-green-700 hover:shadow-lg"
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
