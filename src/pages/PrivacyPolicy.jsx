import React from "react";

export default function PrivacyPolicy() {
  const menuItems = [
    { id: "intro", title: "Introduction" },
    { id: "collect", title: "Information We Collect" },
    { id: "usage", title: "How We Use Information" },
    { id: "security", title: "Data Storage & Security" },
    { id: "sharing", title: "Data Sharing & Disclosure" },
    { id: "thirdparty", title: "Third-Party Services" },
    { id: "responsibility", title: "User Responsibilities" },
    { id: "retention", title: "Data Retention" },
    { id: "children", title: "Children's Privacy" },
    { id: "changes", title: "Changes to Policy" },
    { id: "contact", title: "Contact Information" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-[280px] border-r border-slate-200 sticky top-0 h-screen overflow-y-auto bg-slate-50">
          <div className="p-8">
            <h2 className="text-xl font-semibold text-slate-900 mb-8">
              Privacy Policy
            </h2>

            <nav>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-slate-600 hover:text-slate-900 transition text-sm"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 mt-20">
          <div className="px-6 md:px-12 lg:px-16 py-12">
            <h1 className="text-5xl md:text-6xl font-light text-center text-slate-900 mb-12">
              Privacy Policy
            </h1>

            {/* Introduction */}
            <section id="intro" className="mb-14">
              <p className="text-[17px] leading-9 text-slate-700">
                AgroPlus ERP (“we,” “our,” or “us”) respects your privacy and is
                committed to protecting your personal and business information.
                This Privacy Policy explains how AgroPlus ERP collects, uses,
                stores, and protects user data when you use our mobile or web
                application (“Application”).
              </p>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                By using AgroPlus ERP, you agree to the practices described in
                this Privacy Policy.
              </p>
            </section>

            {/* Collect */}
            <section id="collect" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                1. Information We Collect
              </h2>

              <p className="text-[17px] leading-9 text-slate-700 mb-6">
                AgroPlus ERP may collect the following types of information:
              </p>

              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Personal Information
              </h3>

              <ul className="list-disc ml-8 space-y-2 text-slate-700 mb-8">
                <li>Name</li>
                <li>Mobile Number</li>
                <li>Email Address</li>
                <li>Business or Farm Details</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Farm & Business Data
              </h3>

              <ul className="list-disc ml-8 space-y-2 text-slate-700 mb-8">
                <li>Crop Details</li>
                <li>Plot Information</li>
                <li>Inventory Records</li>
                <li>Accounting and Financial Records</li>
                <li>Staff Management Data</li>
                <li>Farm Activities and Schedules</li>
              </ul>

              <h3 className="text-xl font-medium text-slate-900 mb-4">
                Device & Technical Information
              </h3>

              <ul className="list-disc ml-8 space-y-2 text-slate-700">
                <li>Device Type</li>
                <li>Operating System</li>
                <li>App Version</li>
                <li>IP Address</li>
                <li>Usage Logs and Analytics</li>
              </ul>
            </section>

            {/* Usage */}
            <section id="usage" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                2. How We Use Your Information
              </h2>

              <p className="text-[17px] leading-9 text-slate-700 mb-6">
                We use collected information to:
              </p>

              <ul className="list-disc ml-8 space-y-3 text-slate-700">
                <li>Provide and improve AgroPlus ERP services</li>
                <li>Manage user accounts and authentication</li>
                <li>Generate reports and analytics</li>
                <li>Maintain data backups and security</li>
                <li>Offer customer support</li>
                <li>Improve application performance and user experience</li>
                <li>
                  Send important updates or notifications related to the
                  Application
                </li>
              </ul>
            </section>

            {/* Security */}
            <section id="security" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                3. Data Storage & Security
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                User data may be stored on secure cloud servers and databases.
                We implement reasonable technical and administrative security
                measures to protect information from unauthorized access, data
                misuse, loss or destruction, and security breaches.
              </p>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                However, no digital platform can guarantee complete security.
              </p>
            </section>

            {/* Sharing */}
            <section id="sharing" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                4. Data Sharing & Disclosure
              </h2>

              <p className="text-[17px] leading-9 text-slate-700 mb-6">
                AgroPlus ERP does not sell or rent user data to third parties.
              </p>

              <p className="text-[17px] leading-9 text-slate-700">
                We may share limited information only in the following
                situations:
              </p>

              <ul className="list-disc ml-8 mt-4 space-y-3 text-slate-700">
                <li>
                  With trusted third-party service providers required for app
                  functionality
                </li>
                <li>
                  To comply with legal obligations or government requests
                </li>
                <li>
                  To protect the security, rights, or integrity of AgroPlus ERP
                  and its users
                </li>
              </ul>
            </section>

            {/* Third Party */}
            <section id="thirdparty" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                5. Third-Party Services
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                The Application may use third-party services such as:
              </p>

              <ul className="list-disc ml-8 mt-4 space-y-3 text-slate-700">
                <li>Google Services</li>
                <li>Cloud Hosting Providers</li>
                <li>SMS or Notification Gateways</li>
                <li>Analytics Tools</li>
              </ul>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                These services may collect limited technical information as
                governed by their own privacy policies.
              </p>
            </section>

            {/* Responsibility */}
            <section id="responsibility" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                6. User Responsibilities
              </h2>

              <ul className="list-disc ml-8 space-y-3 text-slate-700">
                <li>Maintaining confidentiality of account credentials</li>
                <li>Providing accurate information</li>
                <li>Using the Application lawfully and responsibly</li>
              </ul>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                Users should avoid sharing sensitive login information with
                unauthorized persons.
              </p>
            </section>

            {/* Retention */}
            <section id="retention" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                7. Data Retention
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                We may retain user data for as long as necessary to provide
                services, maintain records and backups, comply with legal
                requirements, resolve disputes, or enforce policies.
              </p>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                Users may request account deletion subject to operational and
                legal obligations.
              </p>
            </section>

            {/* Children */}
            <section id="children" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                8. Children’s Privacy
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                AgroPlus ERP is not intended for use by children under the age
                of 13. We do not knowingly collect personal information from
                children.
              </p>
            </section>

            {/* Changes */}
            <section id="changes" className="mb-14">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                9. Changes to This Privacy Policy
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                We may update this Privacy Policy from time to time. Any changes
                will be posted within the Application or official communication
                channels.
              </p>

              <p className="text-[17px] leading-9 text-slate-700 mt-6">
                Continued use of the Application after updates indicates
                acceptance of the revised policy.
              </p>
            </section>

            {/* Contact */}
            <section id="contact">
              <h2 className="text-3xl font-semibold text-slate-900 mb-6">
                10. Contact Information
              </h2>

              <p className="text-[17px] leading-9 text-slate-700">
                For any privacy-related questions or concerns, please contact:
              </p>

              <div className="mt-6 text-slate-700 leading-9">
                <p className="font-medium">Vishal Rajaram Chavhan</p>
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