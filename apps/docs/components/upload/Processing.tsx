"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Tag from "../shared/Tag";

const PROCESSING_INTERVAL = 2000;

type Props = {
  photo: File | null;
};

const Processing = ({ photo }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      router.push("/paywall");
    }, PROCESSING_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen relative flex items-center justify-center">
      {photo && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={URL.createObjectURL(photo)}
            alt="your photo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      <div className="absolute w-full h-2 bg-primary animate-process top-3 before:content-[''] before:absolute before:w-full before:h-[97px] before:bg-gradient-to-t before:from-[rgba(255,96,50,0.8)] before:to-[rgba(153,58,30,0)] before:-top-[90px]" />

      <section className="flex items-center gap-2 flex-wrap">
        <Tag text="AI" />
        <h1 className="font-bold text-[38px]/10 text-center uppercase">
          Processing...
        </h1>
      </section>
    </div>
  );
};

export default Processing;
