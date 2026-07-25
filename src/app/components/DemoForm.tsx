import { useState } from 'react';
import { localTranslations, countriesList } from '../translations';

interface DemoFormProps {
  language: 'en' | 'ar';
}

export default function DemoForm({ language }: DemoFormProps) {
  const m = localTranslations[language];
  const isRTL = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    clinic: '',
    email: '',
    phone: '',
    country: 'Egypt',
    preferredTime: 'morning',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      console.warn("Web3Forms Access Key is not configured. Simulating email transmission.");
      setTimeout(() => {
        setIsSubmitting(false);
        setFormSubmitted(true);
        setFormData({
          name: '',
          clinic: '',
          email: '',
          phone: '',
          country: 'Egypt',
          preferredTime: 'morning',
          message: ''
        });
      }, 1500);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Dentoscope Demo Request from ${formData.name}`,
          from_name: "Dentoscope Marketing",
          ...formData
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          clinic: '',
          email: '',
          phone: '',
          country: 'Egypt',
          preferredTime: 'morning',
          message: ''
        });
      } else {
        alert(language === 'ar' ? 'حدث خطأ أثناء إرسال طلب العرض. يرجى المحاولة مرة أخرى.' : 'Failed to send demo request. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert(language === 'ar' ? 'حدث خطأ في الاتصال. يرجى التحقق من اتصال الإنترنت.' : 'Connection error. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="demo" className="py-24 border-t border-zinc-100 bg-[#f5f5f7] px-6">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16 reveal">
          <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3 block">
            {m.navDemo}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-4">
            {m.demoTitle}
          </h2>
          <p className="text-zinc-500 font-light leading-relaxed">
            {m.demoSubtitle}
          </p>
        </div>

        <div className="bg-white border border-zinc-200/80 rounded-3xl p-8 md:p-10 shadow-lg shadow-zinc-200/40 relative overflow-hidden reveal reveal-delay-100">

          {formSubmitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-3">{m.demoSuccessTitle}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed max-w-md font-light">{m.demoSuccessDesc}</p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-8 text-xs font-bold text-zinc-900 border border-zinc-300 hover:bg-zinc-50 rounded-full px-6 py-2 transition-all cursor-pointer bg-transparent font-semibold"
              >
                {language === 'ar' ? 'إرسال طلب جديد' : 'Submit Another Request'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} dir={isRTL ? 'rtl' : 'ltr'} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5 text-start">
                  <label htmlFor="demo-name" className="text-xs font-bold text-zinc-700">{m.demoName} *</label>
                  <input
                    id="demo-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none text-start"
                  />
                </div>

                {/* Clinic Name */}
                <div className="space-y-1.5 text-start">
                  <label htmlFor="demo-clinic" className="text-xs font-bold text-zinc-700">{m.demoClinic} *</label>
                  <input
                    id="demo-clinic"
                    type="text"
                    name="clinic"
                    required
                    value={formData.clinic}
                    onChange={handleInputChange}
                    className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none text-start"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Email */}
                <div className="space-y-1.5 text-start">
                  <label htmlFor="demo-email" className="text-xs font-bold text-zinc-700">{m.demoEmail} *</label>
                  <input
                    id="demo-email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none text-start"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5 text-start">
                  <label htmlFor="demo-phone" className="text-xs font-bold text-zinc-700">{m.demoPhone} *</label>
                  <input
                    id="demo-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-4 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none text-start"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Country Selector */}
                <div className="space-y-1.5 text-start">
                  <label htmlFor="demo-country" className="text-xs font-bold text-zinc-700">{m.demoCountry}</label>
                  <div className="relative">
                    <select
                      id="demo-country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-5 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none appearance-none cursor-pointer text-start"
                    >
                      {countriesList.map((country) => (
                        <option key={country.code} value={country.enName}>
                          {language === 'ar' ? country.arName : country.enName}
                        </option>
                      ))}
                    </select>
                    <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRTL ? 'left-5' : 'right-5'} text-zinc-500`}>
                      ▼
                    </div>
                  </div>
                </div>

                {/* Preferred Contact Time */}
                <div className="space-y-1.5 text-start">
                  <label htmlFor="demo-time" className="text-xs font-bold text-zinc-700">{m.demoTime}</label>
                  <div className="relative">
                    <select
                      id="demo-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-full px-5 py-2.5 bg-white text-zinc-900 text-sm transition-all outline-none appearance-none cursor-pointer text-start"
                    >
                      <option value="morning">{m.demoTimeMorning}</option>
                      <option value="afternoon">{m.demoTimeAfternoon}</option>
                      <option value="evening">{m.demoTimeEvening}</option>
                    </select>
                    <div className={`absolute top-1/2 -translate-y-1/2 pointer-events-none ${isRTL ? 'left-5' : 'right-5'} text-zinc-500`}>
                      ▼
                    </div>
                  </div>
                </div>
              </div>

              {/* Notes/Message */}
              <div className="space-y-1.5 text-start">
                <label htmlFor="demo-message" className="text-zinc-700 text-xs font-bold">{m.demoMessage}</label>
                <textarea
                  id="demo-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full border border-zinc-200 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 rounded-2xl px-5 py-3 bg-white text-zinc-900 text-sm transition-all outline-none resize-none text-start"
                />
              </div>

              {/* Submit Button */}
              <div className={`pt-2 flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-zinc-900 hover:bg-black disabled:bg-zinc-400 text-white font-bold px-5 py-2.5 sm:px-8 sm:py-3 rounded-full text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer border-0 font-semibold"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : null}
                  {m.demoSubmit}
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </section>
  );
}
