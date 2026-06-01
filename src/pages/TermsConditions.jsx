import React from "react";

export default function TermsConditions() {
  const menuItems = [
    { id: "intro", title: "Introduction" },
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "about", title: "About AgroPlus ERP" },
    { id: "accounts", title: "User Accounts" },
    { id: "accuracy", title: "Data Accuracy & User Input" },
    { id: "freeusage", title: "Free Usage & Future Services" },
    { id: "security", title: "Data Storage & Security" },
    { id: "responsibility", title: "User Responsibilities" },
    { id: "thirdparty", title: "Third-Party Services" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "intellectual", title: "Intellectual Property Rights" },
    { id: "termination", title: "Suspension & Termination" },
    { id: "changes", title: "Changes to Terms" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[280px] border-r border-slate-200 sticky top-0 h-screen overflow-y-auto bg-slate-50">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-8">
              Terms & Conditions
            </h2>

            <nav>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-600 hover:text-slate-900 text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 mt-20">
          <div className="px-6 md:px-12 lg:px-16 py-12">

            <h1 className="text-5xl md:text-6xl font-light text-center text-slate-900 mb-4">
              Terms & Conditions
            </h1>

            

            {/* INTRODUCTION */}
            <section id="intro" className="mb-14">
              <p className="text-[17px] leading-9 text-slate-700">
                Welcome to AgroPlus ERP. These Terms & Conditions
                ("Terms") govern your access to and use of the
                AgroPlus ERP mobile and web application
                ("Application"), operated and managed by
                Vishal Rajaram Chavhan.
              </p>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                By downloading, accessing, registering, or using
                AgroPlus ERP, you agree to comply with these Terms.
                If you do not agree with any part of these Terms,
                please discontinue use of the Application
                immediately.
              </p>
            </section>

            {/* 1 */}
            <section id="acceptance" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                1. Acceptance of Terms
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                By using AgroPlus ERP, you acknowledge that you
                have read, understood, and agreed to be bound by
                these Terms & Conditions and all applicable laws
                and regulations.
              </p>
            </section>

            {/* 2 */}
            <section id="about" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                2. About AgroPlus ERP
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                AgroPlus ERP is a farm and agribusiness management
                software designed to help farmers, farm owners,
                and agricultural businesses efficiently manage
                operations.
              </p>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                The Application may include the following modules
                and services:
              </p>

              <ul className="list-disc ml-8 mt-4 space-y-2 text-slate-700">
                <li>Farm Management</li>
                <li>Accounting & Financial Records</li>
                <li>Staff Management</li>
                <li>Inventory Management</li>
                <li>Plot Management</li>
                <li>Crop Scheduling & Activity Tracking</li>
              </ul>

              <p className="mt-6 text-[17px] leading-9 text-slate-700">
                Additional modules and services may be added or
                modified in the future.
              </p>
            </section>

            {/* 3 */}
            <section id="accounts" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                3. User Accounts
              </h2>

              <ul className="list-disc ml-8 space-y-2 text-slate-700">
                <li>Maintaining login credential confidentiality</li>
                <li>Keeping account information accurate</li>
                <li>All activities conducted through the account</li>
              </ul>

              <p className="mt-6 text-[17px] leading-9 text-slate-700">
                AgroPlus ERP shall not be responsible for
                unauthorized access resulting from user negligence.
              </p>
            </section>

            {/* 4 */}
            <section id="accuracy" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                4. Data Accuracy & User Input
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                Reports, analytics, and calculations generated by
                AgroPlus ERP are based entirely on the information
                entered by users.
              </p>

              <ul className="list-disc ml-8 mt-4 space-y-2 text-slate-700">
                <li>Entering accurate and complete data</li>
                <li>Verifying reports before decisions</li>
              </ul>
            </section>

            {/* 5 */}
            <section id="freeusage" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                5. Free Usage & Future Services
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                AgroPlus ERP is currently provided free of charge.
                Premium features or subscription plans may be
                introduced in the future with prior notice.
              </p>
            </section>

            {/* 6 */}
            <section id="security" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                6. Data Storage & Security
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                User data may be stored on secure cloud-based
                servers and systems. While reasonable measures are
                implemented, absolute security cannot be guaranteed.
              </p>
            </section>

            {/* 7 */}
            <section id="responsibility" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                7. User Responsibilities
              </h2>

              <ul className="list-disc ml-8 space-y-2 text-slate-700">
                <li>Use the Application lawfully</li>
                <li>Provide genuine information</li>
                <li>Avoid misuse of the platform</li>
                <li>Do not hack or disrupt services</li>
              </ul>
            </section>

            {/* 8 */}
            <section id="thirdparty" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                8. Third-Party Services
              </h2>

              <ul className="list-disc ml-8 space-y-2 text-slate-700">
                <li>Google Services</li>
                <li>SMS Gateways</li>
                <li>Cloud Hosting Providers</li>
                <li>Payment & Notification Services</li>
              </ul>
            </section>

            {/* 9 */}
            <section id="liability" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                9. Limitation of Liability
              </h2>

              <ul className="list-disc ml-8 space-y-2 text-slate-700">
                <li>Financial losses</li>
                <li>Crop losses</li>
                <li>Business interruptions</li>
                <li>Technical issues or downtime</li>
                <li>Loss of stored data</li>
              </ul>
            </section>

            {/* 10 */}
            <section id="intellectual" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                10. Intellectual Property Rights
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                All rights, titles, software, content, branding,
                logo, and features of AgroPlus ERP remain the
                exclusive property of Vishal Rajaram Chavhan.
              </p>
            </section>

            {/* 11 */}
            <section id="termination" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                11. Suspension & Termination
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                AgroPlus ERP reserves the right to suspend or
                terminate access if Terms are violated or misuse
                is detected.
              </p>
            </section>

            {/* 12 */}
            <section id="changes" className="mb-14">
              <h2 className="text-3xl font-semibold mb-6">
                12. Changes to Terms
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                Updated versions of these Terms may be published
                from time to time. Continued use of the Application
                indicates acceptance of revised Terms.
              </p>
            </section>

            {/* 13 */}
            <section id="contact">
              <h2 className="text-3xl font-semibold mb-6">
                13. Contact Information
              </h2>

              <div className="text-slate-700 leading-9">
                <p className="font-medium">
                  Vishal Rajaram Chavhan
                </p>
                <p>AgroPlus ERP</p>
                <p>Junnar, Pune, Maharashtra – India</p>
                <p>Email: agroplussoft@gmail.com</p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
}