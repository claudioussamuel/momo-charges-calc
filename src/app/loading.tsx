'use client'

import { CircularProgress } from "@nextui-org/react";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center">
      <CircularProgress size="lg" aria-label="Loading..." />
    </div>
  );
}