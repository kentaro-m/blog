'use client';

import ErrorPage from './ErrorPage';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="ja">
      <body>
        <ErrorPage error={error} reset={reset} />
      </body>
    </html>
  );
}
