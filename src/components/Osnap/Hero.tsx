import Image from "next/image";
import OsnapLogo from "public/assets/osnap-logo.svg";
import placeholderImage from "public/assets/placeholder-image.jpg";
import PlaceholderLogo from "public/assets/placeholder-logo.svg";
export function Hero() {
  return (
    <section className="h-[100dvh] overflow-hidden px-6 pt-[--header-blur-height]">
      <div className="relative isolate mb-8">
        <div className="absolute -right-[30px] -top-[7px] -z-10 w-[109px] -rotate-[27deg] rounded-2xl">
          <Image src={placeholderImage} alt="placeholder" className=" rounded-xl" />
        </div>
        <div className=" absolute -right-[44px] top-[200px] -z-10 w-[65px] rotate-[15deg] rounded-2xl">
          <Image src={placeholderImage} alt="placeholder" className="rounded-xl" />
        </div>
        <h1 className="mb-4 flex items-center gap-2 text-xl text-grey-600">
          Introducing <OsnapLogo />
        </h1>
        <h2 className="mb-6 text-5xl text-black">
          DAO
          <br />
          Governance
          <br />
          made <span className="text-red">simple.</span>
        </h2>
        <div className="z-10">
          <p className="text-lg text-grey-600">Propel your DAO into the future.</p>
          <p className="text-lg text-grey-600">Instant, secure, trustless execution.</p>
          <p className="text-lg text-grey-600">Embrace Next-Gen Governance.</p>
        </div>
      </div>
      <p className="text center text-grey-600">Join the suite of companies already using oSnap</p>
      <div className="my-8 grid max-w-[340px] grid-cols-2 grid-rows-2 gap-y-[3vh]">
        <PlaceholderLogo />
        <PlaceholderLogo />
        <PlaceholderLogo />
        <PlaceholderLogo />
      </div>
    </section>
  );
}