import { FC } from "react";

interface Props {
  text: string;
}

const Tag: FC<Props> = ({ text }) => {
  return (
    <div className="rounded-lg relative overflow-hidden p-[2px] flex items-center justify-center">
      <span className="z-10 text-3xl text-white font-semibold leading-none relative w-full bg-gradient-to-r from-background to-black py-1.5 px-2 rounded-lg">
        {text}
      </span>
      <div
        className="absolute inset-0 border-2 border-transparent rounded-lg"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #FF6B18 0deg, #FF73A6 183.6deg, #EF4014 360deg)",
        }}
      />
    </div>
  );
};

export default Tag;
