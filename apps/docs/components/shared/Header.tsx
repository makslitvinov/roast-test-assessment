import { Button } from "@repo/ui/components/ui/button";
import { ChevronLeft, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  backLink: string;
};

export const Header = ({ backLink }: Props) => {
  return (
    <header className="flex flex-col bg-background">
      <div className="flex items-center justify-between h-[49px] px-6">
        <Button asChild variant="ghost" size="icon">
          <Link href={backLink}>
            <ChevronLeft className="text-white" />
          </Link>
        </Button>

        <div className="flex items-center gap-2">
          <Image
            alt="logo"
            src="/logo.svg"
            height={24}
            width={20}
            className="h-6 w-5"
          />

          <Image
            alt="roast"
            src="/wordmark.svg"
            className="mt-1"
            height={17}
            width={57}
          />
        </div>

        <Button asChild variant="ghost" className="rounded-full">
          <Link href="/">
            <X className="text-white" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
