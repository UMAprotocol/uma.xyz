import Image from "next/image";
import introducingOsnap from "public/assets/introducing-osnap.png";
export function Hero() {
  return (
    <section className="-mt-header-and-vote-ticker-height bg-white px-page-padding py-8 md:py-12 lg:py-[72px]">
      <Image
        src={introducingOsnap}
        alt="introducing oSnap"
        className="mx-auto aspect-[3183/1000] w-[212px] md:mb-1 md:w-[246px]"
      />
      <h1 className="mb-3 bg-gradient-to-r from-grey-900 to-grey-900/60 bg-clip-text text-center text-4xl font-medium text-transparent sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
        Offchain governance.
        <br />
        Onchain execution.
      </h1>
      <p className="mx-auto mb-6 max-w-[568px] text-center text-lg text-grey-600 md:mb-7">
        Optimistically execute governance transactions onchain where your community can approve them.
      </p>
      <button className="mx-auto block rounded-xl bg-grey-900 px-4 py-3 text-lg font-medium text-white">
        Try oSnap
      </button>
    </section>
  );
}
