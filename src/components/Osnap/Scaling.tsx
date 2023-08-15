import Image from "next/image";
import thinker from "public/assets/thinker.png";
import { Icon } from "../Icon";

export function Scaling() {
  return (
    <section className="bg-grey-50 px-6 py-12">
      <div className="mx-auto grid max-w-[1200px] md:grid-cols-2 md:gap-12">
        <Image
          src={thinker}
          alt="thinker"
          className="mb-10 aspect-[13/10] w-full rounded-3xl object-cover md:my-5 md:aspect-square md:max-w-[500px]"
        />
        <div className="max-w-[540px]">
          <h2 className="mb-10 text-3xl text-grey-900 md:text-6xl">DAO scaling without compromise</h2>
          <div className="mb-8 grid grid-rows-[auto,auto] gap-3 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Icon name="chat" className="w-14 h-14" />
            <div>
              <h3 className="mb-2 text-lg">Reduces delays</h3>
              <p className="text-grey-600">oSnap enables immediate decision implementation, ending waiting periods.</p>
            </div>
          </div>
          <div className="mb-8 grid grid-rows-[auto,auto] gap-3 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Icon name="zap" className="w-14 h-14" />
            <div>
              <h3 className="mb-2 text-lg">Enhances security</h3>
              <p className="text-grey-600">
                oSnap makes the entire governance process visible on-chain, ensuring accountability.
              </p>
            </div>
          </div>
          <div className="mb-8 grid grid-rows-[auto,auto] gap-3 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Icon name="chart" className="w-14 h-14" />
            <div>
              <h3 className="mb-2 text-lg">Boosts transparency</h3>
              <p className="text-grey-600">
                oSnap&apos;s efficient, automated system allows for seamless scaling as your DAO grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
