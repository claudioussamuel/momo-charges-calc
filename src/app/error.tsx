'use client'

import { Button } from "@nextui-org/react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold text-red-500">Something went wrong!</h2>
      <p className="text-gray-600">{error.message}</p>
      <Button 
        color="primary"
        onClick={reset}
      >
        Try again
      </Button>
    </div>
  );
}