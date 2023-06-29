import Image from "next/image";
import Chart from "public/assets/chart.svg";
import Chat from "public/assets/chat.svg";
import placeholderImage from "public/assets/placeholder-image.png";
import Zap from "public/assets/zap.svg";

export function Scaling() {
  return (
    <section className="bg-white-200 px-6 py-12">
      <div className="mx-auto grid max-w-[1200px] md:grid-cols-2 md:gap-12">
        <Image
          src={placeholderImage}
          alt="placeholder"
          className="mb-10 aspect-[13/10] w-full rounded-3xl md:my-5 md:aspect-square md:max-w-[500px]"
        />
        <div className="max-w-[540px]">
          <h2 className="mb-10 text-3xl text-grey-900 md:text-6xl">DAO scaling without compromise</h2>
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
          <div className="mb-8 grid grid-rows-[auto,auto] gap-3 md:grid-cols-[auto,auto] md:grid-rows-none">
            <Chart />
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
