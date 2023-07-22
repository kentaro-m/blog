'use client';

import { Skeleton } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Skeleton
      height={800}
      startColor="dark.700"
      endColor="dark.800"
      borderRadius={7}
      ml={[5, 0]}
      mr={[5, 0]}
    />
  );
}
