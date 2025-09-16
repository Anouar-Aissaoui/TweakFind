
import type { Metadata } from 'next';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Disclaimer for TweakFind. Information regarding the use of third-party apps, risks, and our responsibilities.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">Disclaimer</h1>
        <p className="mt-4 text-lg text-muted-foreground">Please read this carefully before using our service.</p>
      </header>

      <Alert variant="destructive" className="mb-8">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          The applications available on TweakFind are modified versions of official apps. Using them may involve risks and could be against the terms of service of the original app developers.
        </AlertDescription>
      </Alert>

      <div className="prose prose-invert max-w-none text-foreground text-lg">
        <h2 className="text-2xl font-bold mt-8 mb-4">1. No Affiliation</h2>
        <p>
          TweakFind is an independent platform and is not affiliated with, endorsed by, sponsored by, or in any way associated with Apple Inc., Google LLC, or any of the developers of the applications featured on this site. All trademarks, service marks, trade names, trade dress, product names, and logos appearing on the site are the property of their respective owners.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. For Educational & Experimental Purposes Only</h2>
        <p>
          All content and applications provided on TweakFind are for educational, experimental, and personal use only. They are intended to allow users to test and experience extended functionalities of their devices and apps. We do not support or condone the use of these applications for any illegal or malicious activities.
        </p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">3. Assumption of Risk</h2>
        <p>
          You acknowledge and agree that you download and use the applications provided on this website at your own risk. While we strive to ensure that all apps are safe and free from malware, we cannot guarantee their functionality or safety. The use of modified apps can have unintended consequences, including, but not limited to:
        </p>
        <ul>
          <li>Account suspension or termination from the original service provider.</li>
          <li>Loss of data.</li>
          <li>Unexpected app behavior or instability.</li>
          <li>Security vulnerabilities.</li>
        </ul>
        <p>
          By using our service, you agree to hold TweakFind and its operators harmless from any and all liability or damages that may arise from your use of the applications found on this website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">4. No Warranty</h2>
        <p>
          The services and applications on this website are provided "as is" without any warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the service will be uninterrupted or error-free.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">5. DMCA and Copyright</h2>
        <p>
          We respect the intellectual property of others. If you believe that any content on TweakFind infringes upon your copyright, please contact us with a valid DMCA complaint, and we will take appropriate action.
        </p>
      </div>
    </div>
  );
}
