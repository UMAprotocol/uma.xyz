import Image from "next/image";
import Link from "next/link";
import OsnapLogo from "public/assets/osnap-logo.svg";
import placeholderImage from "public/assets/placeholder-image.jpg";
import PlaceholderLogo from "public/assets/placeholder-logo.svg";

export function Hero() {
  return (
    <section className="mx-auto min-h-[100dvh] max-w-[480px] px-6 pt-[--header-blur-height] md:max-w-[1216px]">
      <div className="relative isolate mb-8 md:grid md:grid-cols-[1.4fr,1fr] md:gap-4">
        <div className="absolute -right-[30px] -top-[7px] -z-10 w-[109px] -rotate-[27deg] rounded-2xl md:hidden">
          <Image src={placeholderImage} alt="placeholder" className=" rounded-xl" />
        </div>
        <div className=" absolute -right-[44px] top-[200px] -z-10 w-[65px] rotate-[15deg] rounded-2xl md:hidden">
          <Image src={placeholderImage} alt="placeholder" className="rounded-xl" />
        </div>
        <div>
          <h1 className="mb-4 flex items-center gap-2 text-xl text-grey-600 md:text-2xl">
            Introducing <OsnapLogo className="w-[61px] md:w-[77px]" />
          </h1>
          <h2 className="mb-6 text-5xl text-black md:text-6xl lg:text-8xl">
            DAO <br className="md:hidden" />
            Governance
            <br />
            made <span className="text-red">simple.</span>
          </h2>
          <div className="z-10">
            <p className="text-lg text-grey-600">Propel your DAO into the future.</p>
            <p className="text-lg text-grey-600">Instant, secure, trustless execution.</p>
            <p className="text- lg text-grey-600">Embrace Next-Gen Governance.</p>
            <Link
              className="mb-12 mt-6 block h-[40px] w-[118px] rounded-xl bg-black p-[8px_16px_12px_16px] text-white"
              href="/todo"
            >
              Try oSnap
            </Link>
          </div>
        </div>
        <div className="-mt-[48px] hidden aspect-square max-w-[498px] rounded-[56px] md:block">
          <Image src={placeholderImage} alt="placeholder" className="rounded-[56px]" />
        </div>
      </div>
      <p className="text-center text-grey-600">Join the suite of companies already using oSnap</p>
      <div className="mx-auto my-8 grid max-w-[380px] grid-cols-2 grid-rows-2 justify-items-center gap-y-[3vh] md:max-w-fit md:grid-cols-4 md:grid-rows-1 md:gap-x-12">
        <PlaceholderLogo />
        <PlaceholderLogo />
        <PlaceholderLogo />
        <PlaceholderLogo />
      </div>
    </section>
  );
}
