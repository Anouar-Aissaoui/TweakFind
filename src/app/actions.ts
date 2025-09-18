'use server';

import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
  const query = formData.get('q')?.toString();

  if (query) {
    redirect(`/search?q=${encodeURIComponent(query)}`);
  } else {
    redirect('/');
  }
}
