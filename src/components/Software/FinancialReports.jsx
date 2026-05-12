import React from "react";
import { motion } from "framer-motion";
import { ReceiptText } from "lucide-react";

export default function BillingAutomation() {
  return (
    <section className="relative bg-[#f8fafc] py-16 md:py-24 overflow-hidden">

      {/* BACKGROUND BLUR */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >

            {/* GREEN BG CIRCLE */}
            <div className="
              absolute
              top-10 left-10
              w-[420px]
              h-[420px]
              bg-green-200
              rounded-full
              opacity-40
              blur-2xl
            "></div>

            {/* MAIN MOBILE MOCKUP */}
            <div className="relative z-10 flex justify-center">

              <div className="
                bg-[#111827]
                rounded-[38px]
                p-3
                shadow-2xl
                border-[6px]
                border-black
                w-[280px]
              ">

                {/* MOBILE TOP */}
                <div className="flex justify-center mb-3">
                  <div className="w-20 h-2 rounded-full bg-gray-700"></div>
                </div>

                {/* MOBILE SCREEN */}
                <div className="
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                ">

                  {/* HEADER */}
                  <div className="
                    bg-gradient-to-r
                    from-green-500
                    to-green-600
                    text-white
                    px-4 py-4
                  ">
                    <h3 className="font-bold text-lg">
                      Agroplus Software
                    </h3>

                    <p className="text-xs opacity-80 mt-1">
                      Smart Billing Dashboard
                    </p>
                  </div>

                  {/* BILLING CARDS */}
                  <div className="p-4 space-y-3">

                    {[
                      "GST Invoice",
                      "Quotation",
                      "Sales Entry",
                      "Payment Receipt",
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="
                          flex items-center justify-between
                          bg-[#f8fafc]
                          border border-gray-100
                          rounded-xl
                          px-4 py-3
                        "
                      >
                        <div className="flex items-center gap-3">
                          <div className="
                            w-10 h-10
                            rounded-lg
                            bg-green-100
                            flex items-center justify-center
                          ">
                            📄
                          </div>

                          <p className="font-medium text-gray-800 text-sm">
                            {item}
                          </p>
                        </div>

                        <span className="text-green-600 text-lg">
                          ✓
                        </span>
                      </div>
                    ))}

                  </div>

                </div>

              </div>

              

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >

            {/* TAG */}
            <div className="
              inline-flex items-center gap-2
              bg-orange-100
              text-orange-600
              px-4 py-2
              rounded-full
              mb-6
            ">
              <ReceiptText size={18} />

              <p className="text-sm font-semibold tracking-wide">
                Agroplus Billing
              </p>
            </div>

            {/* HEADING */}
            <h2 className="
              text-3xl sm:text-4xl md:text-5xl
              font-black
              text-gray-900
              leading-tight
              mb-6
            ">

              Create GST Bills <br />

              <span className="
                bg-gradient-to-r
                from-green-600
                to-orange-500
                bg-clip-text
                text-transparent
              ">
                & Share on WhatsApp
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p className="
              text-gray-600
              text-base sm:text-lg
              leading-relaxed
              max-w-xl
              mb-8
            ">
              Generate GST invoices instantly and share bills,
              quotations & payment details directly with customers
              through WhatsApp in just one click.
            </p>

            {/* INPUT + BUTTON */}
            <div className="
              flex flex-col sm:flex-row
              items-stretch
              w-full
              max-w-xl
              overflow-hidden
              rounded-2xl
              border border-gray-300
              bg-white
              shadow-sm
            ">

              {/* COUNTRY CODE */}
              <div className="
                flex items-center justify-center
                px-5
                font-bold
                text-gray-900
                border-b sm:border-b-0 sm:border-r
                border-gray-300
                bg-gray-50
              ">
                +91
              </div>

              {/* INPUT */}
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="
                  flex-1
                  px-5 py-4
                  outline-none
                  text-gray-700
                "
              />

              {/* BUTTON */}
              <a
                href="https://wa.me/914105040000
"
                target="_blank"
                rel="noreferrer"
                className="
                  bg-black
                  hover:bg-gray-900
                  text-white
                  font-semibold
                  px-8 py-4
                  transition
                  flex items-center justify-center
                  whitespace-nowrap
                "
              >
                Know More
              </a>

            </div>

            {/* SMALL TEXT */}
            <p className="text-sm text-gray-500 mt-4">
              Easy billing, customer sharing & invoice tracking for agro businesses.
            </p>

          </motion.div>

        </div>
      </div>
    </section>
  );
}