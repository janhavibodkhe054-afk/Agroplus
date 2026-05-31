import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  MessageCircle,
  Clock3,
} from "lucide-react";

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
      `https://wa.me/914105040000?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Us | Krushi Seva Kendra | Seeds,
          Fertilizers & Farming Guidance
        </title>

        <meta
          name="description"
          content="Contact Krushi Seva Kendra for quality seeds, fertilizers, pesticides, crop advisory, farming guidance and agricultural products. Connect with our experts today."
        />

        <meta
          name="keywords"
          content="Krushi Seva Kendra Contact, Agriculture Products, Seeds, Fertilizers, Pesticides, Farming Guidance, Crop Advisory, Agricultural Shop"
        />

        <link
          rel="canonical"
          href="https://yourwebsite.com/contact"
        />

        <meta
          property="og:title"
          content="Contact Krushi Seva Kendra"
        />

        <meta
          property="og:description"
          content="Get expert farming support, crop guidance and agricultural products from Krushi Seva Kendra."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      {/* HERO */}
      <section className="relative h-[280px] md:h-[360px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2000&auto=format&fit=crop"
          alt="Contact Krushi Seva Kendra"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 to-black/50"></div>

        <div className="relative z-10 h-full flex items-center justify-center text-center px-6 mt-10">
          <div>
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-5 border border-white/20">
              Contact Krushi Seva Kendra
            </span>

            <h1 className="text-white text-4xl md:text-6xl font-black mb-4">
              Let's Grow Better Together
            </h1>

            <p className="text-white/90 max-w-xl mx-auto">
              Contact us for agricultural products, crop guidance
              and farming solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="relative py-20 bg-[#f8faf7] overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-40"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            {/* LEFT SIDE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-100 text-green-700 font-semibold mb-6">
                <MessageCircle size={16} />
                Get In Touch
              </span>

              <h2 className="text-4xl lg:text-4xl font-black text-gray-900 leading-tight mb-5">
                Need Farming
                
                  Support?
               
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our team is ready to help with seeds,
                fertilizers, pesticides, crop management and
                modern farming guidance.
              </p>

              <div className="space-y-5">
                <div className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 text-white flex items-center justify-center group-hover:scale-110 transition">
                    <Phone size={28} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Call Us
                    </p>

                    <a
                      href="tel:+919860207957"
                      className="text-lg font-bold text-gray-900"
                    >
                      +91 41050 40000

                    </a>
                  </div>
                </div>

                <div className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 text-white flex items-center justify-center group-hover:scale-110 transition">
                    <Mail size={28} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Email Address
                    </p>

                    <p className="text-lg font-bold text-gray-900">
                      info@yourwebsite.com
                    </p>
                  </div>
                </div>

                <div className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-green-600 text-white flex items-center justify-center group-hover:scale-110 transition">
                    <MapPin size={28} />
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Location
                    </p>

                    <p className="text-lg font-bold text-gray-900">
                      Pargaon Mangrul, Pune, Maharashtra 412105
                    </p>
                  </div>
                </div>

                
              </div>
            </motion.div>

            {/* RIGHT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-[40px] blur-xl opacity-20"></div>

              <div className="relative bg-white rounded-[40px] p-8 md:p-10 shadow-2xl border border-gray-100">
                <h3 className="text-3xl font-black text-gray-900 mb-3">
                  Send Inquiry
                </h3>

                <p className="text-gray-600 mb-8">
                  Fill the form and connect instantly through
                  WhatsApp.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-green-600 outline-none"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-14 px-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-green-600 outline-none"
                  />

                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Write your message..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-green-600 outline-none resize-none"
                  />

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-between bg-green-700 hover:bg-green-800 rounded-2xl text-white overflow-hidden transition-all"
                  >
                    <span className="px-6 py-4 text-lg font-semibold">
                      Send on WhatsApp
                    </span>

                    <div className="w-16 h-16 bg-yellow-400 flex items-center justify-center">
                      <Send
                        size={22}
                        className="text-black group-hover:translate-x-1 transition"
                      />
                    </div>
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
          title="Krushi Seva Kendra Location"
          src="https://www.google.com/maps/embed?pb="
          width="100%"
          height="280"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full border-0"
        ></iframe>
      </section>
    </>
  );
}