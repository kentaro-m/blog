'use client';

import ErrorPage from './ErrorPage';

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <html lang="ja">
      <body>
        <ErrorPage error={error} />
      </body>
    </html>
  );
}
