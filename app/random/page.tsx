'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ClientComponent() {
  const router = useRouter();

  useEffect(() => {
    const value = 'my-session-value';

    fetch('/api/cookiestore', {
      method: 'POST',
      body: JSON.stringify({ value }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log('cookie stored .. ');
          router.push('/dashboard'); // ✅ This triggers a GET request
        } else {
          console.error('Failed to store cookie');
        }
      })
      .catch((err) => {
        console.error('Error posting to API:', err);
      });
  }, []);

  return <div>Sending session value...</div>;
}
