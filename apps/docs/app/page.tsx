import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";
import { PhotosBackground } from "~/components/shared/PhotosBackground";

export default function Page() {
  return (
    <div className="relative flex flex-col justify-end items-center h-screen w-screen bg-gradient-to-t from-black to-transparent bg-opacity-50 overflow-hidden">
      <PhotosBackground />

      <div className="relative">
        <header className="flex items-center gap-3 w-full justify-center mb-6">
          <Image
            alt="An orange letter 'R'"
            src="/logo.svg"
            height="32"
            width="26"
          />

          <Image
            alt="Roast"
            src="/wordmark.svg"
            height="23"
            width="75"
            className="mt-1"
          />
        </header>

        <main className="flex flex-col items-center justify-center px-1 w-full mb-[84px]">
          <p className="text-[34px]/10 text-balance text-center font-bold mb-2 tracking-tighter">
            GET THE PERFECT DATING PICS, INSTANTLY
          </p>

          <p className="text-lg text-balance text-center font-normal not-italic">
            Use AI to generate authentic pictures, designed to get you more
            matches
          </p>
        </main>
      </div>

      <footer className="relative w-full px-8 pb-4">
        <Button asChild>
          <Link href="/upload-your-photo">Yes I want this !</Link>
        </Button>
      </footer>
    </div>
  );
}
