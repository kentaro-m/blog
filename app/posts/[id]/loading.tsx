'use client';

import { Skeleton } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Skeleton
      height={800}
      startColor="dark.700"
      endColor="dark.800"
      borderRadius={[0, 7]}
    />
  );
}
