'use client';

import ErrorPage from './ErrorPage';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return <ErrorPage error={error} />;
}
