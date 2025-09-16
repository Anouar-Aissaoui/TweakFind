
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About TweakFind',
  description: 'Learn about TweakFind, our mission to provide safe, reliable, and accessible tweaked apps for iOS and Android, and our commitment to the community.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tighter text-primary sm:text-5xl">About TweakFind</h1>
        <p className="mt-4 text-lg text-muted-foreground">Your Trusted Source for Tweaked Apps</p>
      </header>

      <section className="prose prose-invert max-w-none text-lg mx-auto text-foreground">
        <p>
          Welcome to TweakFind, the premier destination for iOS and Android enthusiasts seeking to unlock the full potential of their devices. In a world of restrictive app stores and limited functionality, we believe everyone deserves the freedom to customize their mobile experience.
        </p>
        <p>
          Our journey began with a simple idea: what if getting tweaked apps could be safe, easy, and accessible to everyone, without the need for complex procedures like jailbreaking or rooting? Frustrated by the risky and unreliable sources scattered across the web, we set out to build a platform that prioritizes user safety and provides a curated library of high-quality, modified applications.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-8">Our Core Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-secondary/50 border-border">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Safety First</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              Every app on our platform is rigorously scanned for malware and security threats. We are committed to providing a 100% safe, jailbreak-free, and root-free experience. Your security is our top priority.
            </CardContent>
          </Card>
          <Card className="bg-secondary/50 border-border">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Accessibility for All</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              We believe that app customization shouldn't be reserved for tech experts. Our platform is designed to be user-friendly, with a straightforward installation process that anyone can follow.
            </CardContent>
          </Card>
          <Card className="bg-secondary/50 border-border">
            <CardHeader className="items-center">
              <div className="p-3 bg-primary/10 rounded-full mb-2">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>Community-Driven</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
              TweakFind is built for the community, by the community. We listen to user feedback to constantly improve our library and platform, ensuring we offer the apps and features you care about most.
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
