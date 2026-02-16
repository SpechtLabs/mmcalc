export function TermsPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Terms of Service</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Effective Date: February 16, 2026</p>

      <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Acceptance of Terms</h2>
          <p>
            By accessing and using mmcalc.de (the "Service"), you accept and agree to be bound by these Terms of Service ("Terms").
            If you do not agree to these Terms, you must not access or use the Service.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Description of Service</h2>
          <p>
            mmcalc.de is a free online calculator that converts camera lens focal length and aperture values between different
            sensor sizes and their full-frame (35mm) equivalent. The Service provides a web-based interface for interactive
            calculations and a plain-text API accessible via command-line tools (e.g. curl). Users can compare multiple lens
            and sensor combinations side by side. The Service does not require registration, does not collect personal data,
            and does not process payments.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">3. User Obligations</h2>
          <p className="mb-2">You agree not to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Send excessive automated requests to the Service in a manner that degrades availability for other users.</li>
            <li>Attempt to exploit, probe, or interfere with the operation of the Service or its underlying infrastructure.</li>
            <li>Use the Service in a manner inconsistent with any applicable laws or regulations.</li>
            <li>Misrepresent calculation results obtained from the Service as professionally certified or guaranteed values.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Intellectual Property</h2>
          <p>
            The Service, including its source code, design, and content, is the property of its operator. You may freely use the
            Service for personal and commercial purposes (e.g. looking up equivalent values for your photography work). You may
            not clone or redistribute the Service itself without permission.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">5. Accuracy Disclaimer</h2>
          <p>
            Calculation results are approximations based on standard optical equivalence formulas. Actual results may vary depending
            on specific camera and lens combinations. The equivalent aperture calculation reflects depth of field equivalence only
            and does not affect exposure. We make no warranty regarding the accuracy of results for any specific use case.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">6. Disclaimer of Warranties</h2>
          <p className="uppercase">
            The Service is provided on an "as-is" and "as-available" basis without warranties of any kind, whether express or
            implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">7. Limitation of Liability</h2>
          <p className="uppercase">
            In no event shall the operator be liable for any indirect, incidental, special, consequential, or punitive damages
            arising out of or related to your use of the Service.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">8. Modifications</h2>
          <p>
            We reserve the right to modify, suspend, or discontinue the Service at any time without notice. We may update these
            Terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">9. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the Federal Republic of Germany. The courts of Hamburg, Germany, shall have
            jurisdiction over any disputes arising from the use of this Service.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">10. Contact</h2>
          <p>
            If you have questions about these Terms, please contact us at:<br />
            Email: <a href="mailto:impressum@specht-labs.de" className="text-teal-600 dark:text-teal-400 hover:underline">impressum@specht-labs.de</a><br />
            Website: <a href="https://mmcalc.de" className="text-teal-600 dark:text-teal-400 hover:underline">mmcalc.de</a>
          </p>
        </section>
      </div>
    </main>
  );
}
