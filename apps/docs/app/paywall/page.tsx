import { PaywallAccordion } from "~/components/paywall/PaywallAccordion";
import { PaywallTimer } from "~/components/paywall/Timer";
import Tag from "~/components/shared/Tag";

const PaywallPage = () => {
  return (
    <>
      <PaywallTimer />

      <div className="px-6 mt-8">
        <h1 className="flex flex-wrap font-semibold items-center gap-x-4 tracking-tighter text-[28px]/[26px] uppercase">
          <span>Select a package and</span>
          <span>get your</span>
          <Tag text="AI" />
          <span>pics</span>
        </h1>

        <PaywallAccordion />
      </div>
    </>
  );
};

export default PaywallPage;
