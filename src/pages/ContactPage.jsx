import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, MessageCircle, Clock3 } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `*New Inquiry From Website*

👤 Name: ${formData.name}

📞 Phone: ${formData.phone}

💬 Message:
${formData.message}`;

    window.open(
      `https://wa.me/+919860207957?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Us | Krushi Seva Kendra | Seeds, Fertilizers & Farming
          Guidance
        </title>

        <meta
          name="description"
          content="Contact Krushi Seva Kendra for quality seeds, fertilizers, pesticides, crop advisory, farming guidance and agricultural products. Connect with our experts today."
        />

        <meta
          name="keywords"
          content="Krushi Seva Kendra Contact, Agriculture Products, Seeds, Fertilizers, Pesticides, Farming Guidance, Crop Advisory, Agricultural Shop"
        />

        <link rel="canonical" href="https://yourwebsite.com/contact" />

        <meta property="og:title" content="Contact Krushi Seva Kendra" />

        <meta
          property="og:description"
          content="Get expert farming support, crop guidance and agricultural products from Krushi Seva Kendra."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative min-h-[45vh] md:min-h-[50vh] flex items-center justify-center overflow-hidden pb-4 md:pb-4 pt-20 lg:pt-20"
        style={{
          backgroundImage:
            "url('https://khetibuddy.com/wp-content/uploads/2026/05/Software-Development-for-Agriculture.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-10 lg:py-10 bg-[#f8faf7] overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 sm:px-5 py-2 rounded-full font-semibold text-xs sm:text-sm mb-5 sm:mb-6">
                <MessageCircle size={14} className="sm:w-4 sm:h-4" />
                Contact Agroplus
              </span>

              <h2 className="text-2xl md:text-3xl font-bold font-black text-gray-900 leading-tight mb-4 sm:mb-6">
                Let's Grow{" "}
                <span className="text-green-600">Agriculture Together</span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
                Whether you need quality seedlings, crop protection products,
                fertilizers or expert farming guidance, our team is here to
                support your agricultural journey.
              </p>

              {/* Contact Info Box */}
              <div className="bg-white rounded-[32px] p-8 shadow-xl border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                      <Phone size={22} className="text-green-700" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Phone Number</p>

                      <a
                        href="tel:+919860207957"
                        className="font-bold text-lg text-gray-900"
                      >
                        +91 98602 07957
                      </a>
                    </div>
                  </div>

                  <div className="border-t"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                      <Mail size={22} className="text-green-700" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">
                        Email Address
                      </p>

                      <p className="font-bold text-lg text-gray-900">
                        info@agroplus.co.in
                      </p>
                    </div>
                  </div>

                  <div className="border-t"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
                      <MapPin size={22} className="text-green-700" />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500 mb-1">Location</p>

                      <p className="font-bold text-gray-900 leading-relaxed">
                        Pargaon Mangrul, Pune, Maharashtra 412105
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white rounded-[36px] p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-gray-100">
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  Send Inquiry
                </h3>

                <p className="text-gray-600 mb-8">
                  Fill in your details and connect with us instantly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:border-green-600 outline-none"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:border-green-600 outline-none"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 focus:border-green-600 outline-none"
                  />

                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Write your message..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 rounded-2xl border border-gray-200 focus:border-green-600 outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                  >
                    <MessageCircle size={20} />
                    Send on WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="w-full">
        <iframe
          title="Pargaon Mangrul Pune Maharashtra Location"
          src="https://maps.google.com/maps?q=Pargaon%20Mangrul%20Pune%20Maharashtra%20412105&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        ></iframe>
      </section>
    </>
  );
}
