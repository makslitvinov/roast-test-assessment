import { IconCheck } from "@repo/ui/components/icons/check";
import { Button } from "@repo/ui/components/ui/button";
import { Header } from "~/components/shared/Header";
import { PhotosBackground } from "~/components/shared/PhotosBackground";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen max-w-screen overflow-hidden flex flex-col pb-[202px]">
      <PhotosBackground />

      <div className="absolute inset-0 bg-background opacity-75 -z-10" />

      <Header backLink="/upload-your-photo" />

      {children}

      <footer className="w-full fixed bg-background bottom-0 border-t border-t-bunker-800 flex flex-col items-center gap-4 py-4 px-8 mt-8">
        <div className="flex gap-1">
          <IconCheck />
          <p>One-time payment</p>
        </div>
        <Button>Continue</Button>

        <p className="font-semibold text-xs text-[#76919A]">
          100% satisfaction | 4h turnover | ultra realistic
        </p>
      </footer>
    </div>
  );
};

export default Layout;
