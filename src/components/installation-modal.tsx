'use client';

import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import type { App } from '@/lib/apps';
import { CheckCircle } from 'lucide-react';

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

  return (
    <Dialog open={!!app} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-center font-headline">
            Installing {app.name}
          </DialogTitle>
          <DialogDescription className="text-center">
            Follow the steps below to complete the installation.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Progress value={progress} className="w-full" />
            <p className="text-sm text-muted-foreground text-center">{status}</p>
          </div>
          {progress === 100 ? (
            <div className="flex flex-col items-center justify-center text-center p-4 bg-accent rounded-lg">
                <CheckCircle className="h-12 w-12 text-green-500 mb-2" />
                <h3 className="font-semibold">Verification Required</h3>
                <p className="text-sm text-muted-foreground">To finish installation, please complete a quick verification step. Click the button below.</p>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground space-y-2 rounded-lg border p-4">
                <p>1. Tap the 'Install' button to begin.</p>
                <p>2. Wait for the injection process to complete.</p>
                <p>3. Follow any on-screen instructions to finalize.</p>
                <p>4. Enjoy your tweaked app!</p>
            </div>
          )}
        </div>
        <DialogFooter>
          {progress === 100 ? (
            <Button onClick={onClose} className="w-full bg-green-500 hover:bg-green-600">
                Verify Now
            </Button>
          ) : (
             <Button onClick={onClose} variant="outline" className="w-full">
                Cancel
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
