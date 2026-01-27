import { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { CheckCircle, AlertCircle, Loader2, User, Phone, Mail, Clock } from 'lucide-react';

interface FormData {
  fullName: string;
  fatherName: string;
  gender: string;
  timeSlot: string;
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
}

interface FormErrors {
  [key: string]: string;
}

const Register = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    fatherName: '',
    gender: '',
    timeSlot: '',
    whatsappNumber: '',
    phoneNumber: '',
    email: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    'Morning (9:00 AM - 12:00 PM)',
    'Afternoon (2:00 PM - 5:00 PM)',
    'Evening (5:00 PM - 8:00 PM)',
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Name must be at least 3 characters';
    }

    if (!formData.fatherName.trim()) {
      newErrors.fatherName = "Father's name is required";
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select your gender';
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = 'Please select a time slot';
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = 'WhatsApp number is required';
    } else if (!/^(\+92|0)?3\d{9}$/.test(formData.whatsappNumber.replace(/\s/g, ''))) {
      newErrors.whatsappNumber = 'Please enter a valid Pakistani phone number';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^(\+92|0)?3\d{9}$/.test(formData.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid Pakistani phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="pt-32 pb-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6 scale-in">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-heading font-bold mb-4 fade-in-up">
                Registration Successful!
              </h1>
              <p className="text-muted-foreground mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
                ✅ Your registration has been submitted successfully. Our team will contact you shortly.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl transition-all hover:shadow-lg fade-in-up"
                style={{ animationDelay: '0.2s' }}
              >
                Return to Home
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 fade-in-up">
              Register Now
            </h1>
            <p className="text-lg text-white/80 fade-in-up" style={{ animationDelay: '0.2s' }}>
              Take the first step towards your success at LASECT
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div 
            ref={ref}
            className={`max-w-2xl mx-auto transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <SectionTitle
              title="Registration Form"
              subtitle="Please fill in your details below. All fields are required."
            />

            <form onSubmit={handleSubmit} className="academy-card space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <User className="w-4 h-4 text-primary" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.fullName ? 'border-red-500' : 'border-border'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Father Name */}
              <div>
                <label htmlFor="fatherName" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <User className="w-4 h-4 text-primary" />
                  Father's Name
                </label>
                <input
                  type="text"
                  id="fatherName"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.fatherName ? 'border-red-500' : 'border-border'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="Enter your father's name"
                />
                {errors.fatherName && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.fatherName}
                  </p>
                )}
              </div>

              {/* Gender */}
              <div>
                <label className="text-sm font-medium mb-3 block">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female', 'Other'].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center gap-2 px-4 py-3 rounded-xl border cursor-pointer transition-all ${
                        formData.gender === option
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="gender"
                        value={option}
                        checked={formData.gender === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          formData.gender === option ? 'border-primary' : 'border-muted-foreground'
                        }`}
                      >
                        {formData.gender === option && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      {option}
                    </label>
                  ))}
                </div>
                {errors.gender && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.gender}
                  </p>
                )}
              </div>

              {/* Time Slot */}
              <div>
                <label htmlFor="timeSlot" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Preferred Time Slot
                </label>
                <select
                  id="timeSlot"
                  name="timeSlot"
                  value={formData.timeSlot}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.timeSlot ? 'border-red-500' : 'border-border'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.timeSlot && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.timeSlot}
                  </p>
                )}
              </div>

              {/* WhatsApp Number */}
              <div>
                <label htmlFor="whatsappNumber" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  id="whatsappNumber"
                  name="whatsappNumber"
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.whatsappNumber ? 'border-red-500' : 'border-border'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="e.g., 03001234567"
                />
                {errors.whatsappNumber && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.whatsappNumber}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Phone className="w-4 h-4 text-primary" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-border'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="e.g., 03001234567"
                />
                {errors.phoneNumber && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.email ? 'border-red-500' : 'border-border'
                  } bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1 fade-in">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl transition-all hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Registration'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
