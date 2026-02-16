export function PrivacyPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Effective Date: February 16, 2026</p>

      <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Introduction</h2>
          <p>
            This Privacy Policy explains how mmcalc.de ("we", "our", "us") handles information when you use our website
            at mmcalc.de. mmcalc.de is a simple calculator tool that does not require user accounts, does not use cookies
            for tracking, and does not collect personal data beyond what is technically necessary to serve the website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Information We Collect</h2>

          <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-1">2.1 Theme Preference</h3>
          <p>
            The site stores your light/dark mode preference in your browser's localStorage. This data never leaves your
            device and is not transmitted to any server.
          </p>

          <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-1">2.2 Server Log Data</h3>
          <p className="mb-2">
            Our hosting provider (Vercel Inc.) automatically collects standard server log data when you access the site.
            This may include:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Date and time of access</li>
            <li>Pages requested</li>
          </ul>
          <p className="mt-2">
            This data is collected by Vercel as part of standard web hosting operations. We do not have direct access to
            individual log entries.
          </p>

          <h3 className="font-medium text-gray-800 dark:text-gray-200 mt-3 mb-1">2.3 What We Do NOT Collect</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>We do not require or store user accounts, usernames, or passwords</li>
            <li>We do not collect email addresses, names, or other personal information</li>
            <li>We do not process payments or collect financial data</li>
            <li>We do not use analytics services (no Google Analytics, no tracking pixels)</li>
            <li>We do not use advertising or remarketing services</li>
            <li>We do not set tracking cookies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">3. Hosting Provider</h2>
          <p>
            The Service is hosted on Vercel Inc., 440 N Baxter St, Los Angeles, CA 90012, USA. Vercel processes server log
            data as described above. Vercel's privacy policy is available
            at: <a href="https://vercel.com/legal/privacy-policy" className="text-teal-600 dark:text-teal-400 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a>
          </p>
          <p className="mt-2">
            Data may be processed on servers located in the United States. This transfer is necessary to provide the Service
            and is covered by Vercel's data processing practices.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">4. Legal Basis (GDPR)</h2>
          <p>
            For users in the European Economic Area, the legal basis for processing server log data is Art. 6 Abs. 1 lit. f)
            DSGVO (legitimate interest). Our legitimate interest is the stable and secure operation of the website.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">5. Data Retention</h2>
          <p>
            We do not store any user data ourselves. Server log data retention is governed by Vercel's data retention policies.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">6. Your Rights</h2>
          <p className="mb-2">Under the GDPR, you have the right to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Request information about your stored data (Art. 15 DSGVO)</li>
            <li>Request correction of inaccurate data (Art. 16 DSGVO)</li>
            <li>Request deletion of your data (Art. 17 DSGVO)</li>
            <li>Request restriction of processing (Art. 18 DSGVO)</li>
            <li>Data portability (Art. 20 DSGVO)</li>
            <li>Object to processing (Art. 21 DSGVO)</li>
            <li>Lodge a complaint with a supervisory authority (Art. 77 DSGVO)</li>
          </ul>
          <p className="mt-2">
            The competent supervisory authority is: Der Hamburgische Beauftragte fur Datenschutz und Informationsfreiheit,
            Ludwig-Erhard-Str. 22, 20459 Hamburg.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">7. Children's Privacy</h2>
          <p>
            The Service is a general-purpose calculator and does not knowingly collect data from children. Since no personal
            data is collected from any user, no special provisions for children are necessary.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
            effective date.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">9. Contact</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:<br />
            Email: <a href="mailto:datenschutz@specht-labs.de" className="text-teal-600 dark:text-teal-400 hover:underline">datenschutz@specht-labs.de</a>
          </p>
          <p className="mt-3">
            Responsible party (Verantwortlicher):<br />
            Cedric Specht<br />
            Elbgaustrasse 73B<br />
            22523 Hamburg<br />
            Germany
          </p>
        </section>
      </div>
    </main>
  );
}
