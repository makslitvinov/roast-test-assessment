"use client";
import Image from "next/image";

import { Button } from "@repo/ui/components/ui/button";
import { useState } from "react";
import Processing from "~/components/upload/Processing";

export default function UploadYourPhoto() {
  const [photo, setPhoto] = useState<File | null>(null);

  if (photo) {
    return <Processing photo={photo} />;
  }

  return (
    <>
      <main className="pt-8 flex flex-col px-4 flex-1">
        <header>
          <h1 className="text-4xl font-bold text-white not-italic">
            UPLOAD YOUR PHOTO
          </h1>

          <h6 className="text-white font-medium">
            To get the perfect AI dating pics
          </h6>
        </header>

        <section className="relative flex flex-col items-center w-full h-[65vh]">
          <div className="absolute top-0 bottom-0 left-[20%] right-[20%] bg-[#CF0985] blur-[80px] opacity-50 -z-10"></div>

          <div className="relative flex flex-col items-center w-full h-full top-6">
            <Image
              className="absolute top-4"
              src="/100-ai-generated.svg"
              alt="100% AI generated"
              height={90}
              width="200"
            />

            <Image
              className="h-[60vh] object-cover"
              src="/example-pic-01.png"
              height={1000}
              width={1000}
              alt="A man"
            />

            <Image
              className="absolute size-[90px] left-[10px] top-[50%] -z-10"
              src="/example-pic-02.png"
              height={1000}
              width={1000}
              alt="A man"
            />

            <Image
              className="absolute size-[90px] right-[20px] top-[20%] -z-10"
              src="/example-pic-03.png"
              height={1000}
              width={1000}
              alt="A man"
            />

            <div className="absolute top-[52%] text-white opacity-80 right-[26px] rotate-[15deg]">
              BEFORE
            </div>

            <Image
              className="absolute size-[90px] right-[20px] top-[55%] -z-10"
              src="/example-pic-04.png"
              height={1000}
              width={1000}
              alt="A man"
            />
          </div>
        </section>
      </main>

      <footer className="w-full px-8 pb-4">
        <Button asChild>
          <label htmlFor="upload">
            <input
              id="upload"
              type="file"
              className="hidden"
              onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
            />
            UPLOAD MY PHOTO
          </label>
        </Button>
      </footer>
    </>
  );
}
