
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the TweakFind team. Whether you have a question, a suggestion, or an app request, we are here to help.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">We'd love to hear from you. Here's how you can reach us.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-secondary/50 border-border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Mail className="h-8 w-8 text-primary" />
              <CardTitle>Email Support</CardTitle>
            </div>
            <CardDescription>
              The best way to reach us for any inquiries.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">
              <a href="mailto:support@tweakfind.com" className="hover:underline">support@tweakfind.com</a>
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              We typically respond within 24-48 hours. Please check your spam folder if you don't hear back from us.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-secondary/50 border-border">
          <CardHeader>
            <div className="flex items-center gap-4">
              <MessageSquare className="h-8 w-8 text-primary" />
              <CardTitle>Social Media</CardTitle>
            </div>
            <CardDescription>
              Follow us and send us a message on our social platforms.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">
              @TweakFind on X (formerly Twitter)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              For general announcements and quick questions.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-card rounded-lg border border-border/50 text-center">
        <HelpCircle className="h-10 w-10 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">App Requests & Feedback</h3>
        <p className="text-muted-foreground">
          Have an idea for an app we should add, or feedback on how we can improve? Please email us at <a href="mailto:feedback@tweakfind.com" className="text-primary hover:underline">feedback@tweakfind.com</a>. We review every submission and appreciate your contribution to making TweakFind better for everyone.
        </p>
      </div>
    </div>
  );
}
