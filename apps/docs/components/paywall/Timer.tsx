"use client";

import { IconTimer } from "@repo/ui/components/icons/timer";
import { useEffect, useState } from "react";

const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(secs).padStart(2, "0"),
  ].join(":");
};

export const PaywallTimer = () => {
  const [timer, setTimer] = useState((11 * 60 + 14) * 60 + 33);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[37px] max-w-screen bg-orange-gradient px-4 flex items-center justify-between font-semibold">
      <p className="grow-0 w-10 relative font-medium text-lg uppercase">
        <span className="text-nowrap block scale-x-75 font-semibold">
          40% Off → first 69 buyers today!
        </span>
      </p>

      <div className="flex gap-1 items-center shrink-0">
        <IconTimer className="size-5" />
        <p className="text-xl">{formatTime(timer)}</p>
      </div>
    </div>
  );
};
