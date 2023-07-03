import Image from "next/image";
import Link from "next/link";
import handshake from "public/assets/handshake.png";
import OsnapLogo from "public/assets/osnap-logo.svg";

export function Hero() {
  return (
    <section className="mx-auto -mt-[--header-height] max-w-[480px] bg-white px-6 pt-[200px] md:max-w-[1216px]">
      <div className="relative isolate mb-8 md:grid md:grid-cols-[1.4fr,1fr] md:gap-4">
        <div className="absolute -right-[30px] -top-[7px] -z-10 w-[109px] -rotate-[27deg] rounded-2xl md:hidden">
          <Image src={handshake} alt="handshake" className=" rounded-xl" priority />
        </div>
        <div className=" absolute -right-[44px] top-[200px] -z-10 w-[65px] rotate-[15deg] rounded-2xl md:hidden">
          <Image src={handshake} alt="handshake" className="rounded-xl" priority />
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
              className="mb-12 mt-6 grid h-[40px] w-[118px] place-items-center rounded-xl bg-black text-white"
              href="https://docs.uma.xyz/developers/osnap/osnap-quick-start"
            >
              Try oSnap
            </Link>
          </div>
        </div>
        <div className="hidden aspect-square max-w-[498px] rounded-[56px] md:block">
          <Image src={handshake} alt="handshake" className="rounded-[56px]" priority />
        </div>
      </div>
    </section>
  );
}
