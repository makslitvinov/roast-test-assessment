import { Progress } from "@repo/ui/components/ui/progress";
import { Header } from "~/components/shared/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen w-full overflow-scroll flex flex-col">
      <Header backLink="/" />

      <Progress value={25} />

      {children}
    </div>
  );
};

export default Layout;
