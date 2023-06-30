import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import Image from "next/image";
import Chart from "public/assets/chart.svg";
import Chat from "public/assets/chat.svg";
import handshake from "public/assets/handshake.png";
import OsnapLogo from "public/assets/osnap-logo.svg";
import Zap from "public/assets/zap.svg";
import { useRef } from "react";
import AnimatedLink from "../AnimatedLink";

export function Osnap() {
  const id = "osnap";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);
  return (
    <section className="bg-grey-50 px-6 pb-12 pt-[--header-blur-height]" ref={ref} id={id}>
      <div className="mx-auto grid max-w-[1200px] md:grid-cols-2 md:gap-12">
        <Image
          src={handshake}
          alt="handshake"
          className="mb-10 aspect-[13/10] w-full rounded-3xl object-cover md:col-start-2 md:row-start-1 md:my-5 md:aspect-square md:max-w-[500px]"
        />
        <div className="max-w-[540px]">
          <h1 className="mb-4 flex items-center gap-2 text-xl text-grey-600 md:text-2xl">
            Introducing <OsnapLogo className="w-[61px] md:w-[77px]" />
          </h1>
          <h2 className="mb-6 text-3xl text-black md:mb-16 md:text-6xl">
            DAO Governance made <span className="text-red">simple.</span>
          </h2>
          <div className="mb-8 grid grid-rows-[auto,auto] gap-3 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Chat />
            <div>
              <h3 className="mb-2 text-lg">Reduces delays</h3>
              <p className="text-grey-600">oSnap enables immediate decision implementation, ending waiting periods.</p>
            </div>
          </div>
          <div className="mb-8 grid grid-rows-[auto,auto] gap-3 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Zap />
            <div>
              <h3 className="mb-2 text-lg">Enhances security</h3>
              <p className="text-grey-600">
                oSnap makes the entire governance process visible on-chain, ensuring accountability.
              </p>
            </div>
          </div>
          <div className="mb-10 grid grid-rows-[auto,auto] gap-3 md:mb-16 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Chart />
            <div>
              <h3 className="mb-2 text-lg">Boosts transparency</h3>
              <p className="text-grey-600">
                oSnap&apos;s efficient, automated system allows for seamless scaling as your DAO grows.
              </p>
            </div>
          </div>
          <div className="mx-auto w-fit">
            <AnimatedLink href="/osnap">Learn more about oSnap</AnimatedLink>
          </div>
        </div>
      </div>
    </section>
  );
}
