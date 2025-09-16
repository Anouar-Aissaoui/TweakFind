
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy for TweakFind to understand how we collect, use, and protect your data when you use our service.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <div className="prose prose-invert max-w-none text-foreground text-lg">
        <p>
          Welcome to TweakFind ("we," "our," "us"). We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">1. Collection of Your Information</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site includes:
        </p>
        <h3 className="text-xl font-bold mt-4 mb-2">Analytics Data</h3>
        <p>
          We use Simple Analytics, a privacy-first analytics provider, to collect anonymous usage data to understand how our service is being used. This service does not use cookies and does not collect any personal data (personally identifiable information). We do not collect your IP address or store any information on your device.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">2. Use of Your Information</h2>
        <p>
          The anonymous analytical data we collect is used exclusively for internal purposes, such as:
        </p>
        <ul>
          <li>Analyzing usage and trends to improve our website and services.</li>
          <li>Enhancing the user experience.</li>
          <li>Monitoring and analyzing the performance of our website.</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Disclosure of Your Information</h2>
        <p>
          Since we do not collect any personally identifiable information, we do not have any such information to sell, trade, or otherwise transfer to outside parties.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">4. Third-Party Websites</h2>
        <p>
          Our website may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave our Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">6. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">7. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:privacy@tweakfind.com" className="text-primary hover:underline">privacy@tweakfind.com</a>.
        </p>
      </div>
    </div>
  );
}
