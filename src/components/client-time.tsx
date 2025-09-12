
'use client';

import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';

type ClientTimeProps = {
  date: string;
  className?: string;
};

export function ClientTime({ date, className }: ClientTimeProps) {
  const [timeAgo, setTimeAgo] = useState('');

  useEffect(() => {
    setTimeAgo(formatDistanceToNow(new Date(date), { addSuffix: true }));
  }, [date]);

  if (!timeAgo) {
    return null;
  }

  return <span className={cn(className)}>{timeAgo}</span>;
}
