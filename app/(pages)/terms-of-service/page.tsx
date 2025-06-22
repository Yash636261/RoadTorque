import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700/30 rounded-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              By accessing and using our services, you agree to be bound by
              these Terms of Service and all applicable laws and regulations. If
              you do not agree with any of these terms, you are prohibited from
              using or accessing our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Use License
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily access our services for
              personal, non-commercial use only. This license does not include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
              <li>Modifying or copying our materials</li>
              <li>Using our materials for commercial purposes</li>
              <li>Attempting to reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              User Responsibilities
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 ml-4">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account</li>
              <li>Not use our services for illegal purposes</li>
              <li>Not interfere with the proper functioning of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              All content, features, and functionality of our services,
              including but not limited to text, graphics, logos, and software,
              are owned by us or our licensors and are protected by
              international copyright, trademark, and other intellectual
              property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              In no event shall we be liable for any damages arising out of the
              use or inability to use our services, even if we have been
              notified of the possibility of such damages. This includes, but is
              not limited to, direct, indirect, incidental, or consequential
              damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will
              notify users of any material changes by posting the new Terms of
              Service on this page. Your continued use of our services after
              such modifications constitutes your acknowledgment of the modified
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              These terms shall be governed by and construed in accordance with
              the laws of your jurisdiction, without regard to its conflict of
              law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-gray-600 dark:text-gray-300">
                Email: ysuthar8055@gmail.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
