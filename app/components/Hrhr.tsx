"use client";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface HomeProps {
  selected?: string;
}

const Home: React.FC<HomeProps> = ({ selected }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center cursor-pointer">
        <div className="pt-12 text-5xl font-bold text-black lg:pt-24 lg:text-7xl">
          DEXTER GWAPO
        </div>
        <div className="relative text-5xl font-bold text-black lg:text-7xl">
          KAAYO <span>💖</span>
        </div>
      </div>

      {/* <div className="flex flex-col items-center justify-center pt-16 lg:pt-24">
        <div className="pt-4 lg:pt-0">
          <a
            href="https://www.messenger.com/t/100007102815088"
            target="_blank"
            className="border-[3px] p-3 lg:p-4 rounded-xl border-neutral-400 hover:border-black text-neutral-400 hover:text-black"
          >
            Chati ko sa messenger
          </a>
        </div>
        <div className="pt-4 lg:pt-12">
          <a
            href="https://www.facebook.com/dexter.rabina.3"
            target="_blank"
            className="border-[3px] p-3 lg:p-4 rounded-xl border-neutral-400 hover:border-black text-neutral-400 hover:text-black"
          >
            Tan awa ako FaceBook
          </a>
        </div>
        <div className="pt-4 lg:pt-12">
          <a
            href="https://www.facebook.com/dexter.rabina.3"
            target="_blank"
            className="border-[3px] p-3 lg:p-4 rounded-xl border-neutral-400 hover:border-black text-neutral-400 hover:text-black"
          >
            Tan awa ako FaceBook
          </a>
        </div>
      </div> */}
      <div className="flex flex-col items-center justify-center mt-12 sm:mt-12 md:mt-16">
        <div className="pt-16">
          <a
            href="https://www.messenger.com/t/100007102815088"
            target="_blank"
            className="border-[3px] p-4 rounded-xl border-neutral-400 hover:border-black text-neutral-400 hover:text-black"
          >
            Chati ko sa messenger
          </a>
        </div>
        <div className="pt-12 sm:pt-12 md:pt-12">
          <a
            href="https://www.facebook.com/dexter.rabina.3"
            target="_blank"
            className="border-[3px] p-4 rounded-xl border-neutral-400 hover:border-black text-neutral-400 hover:text-black"
          >
            Tan awa ako FaceBook
          </a>
        </div>
        <div className="pt-12 sm:pt-12 md:pt-12">
          <a
            href="https://www.instagram.com/jag_jaggest/"
            target="_blank"
            className="border-[3px] p-4 rounded-xl border-neutral-400 hover:border-black text-neutral-400 hover:text-black"
          >
            <span className="text-white">.</span> Chat ta sa Instagram
            <span className="text-white">.</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
