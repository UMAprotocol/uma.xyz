import Image from "next/image";
import Link from "next/link";
import heroImage from "public/assets/oval_hero.jpg";

export const Hero = () => {
  return (
    <section
      className="relative mx-auto mt-12 flex max-w-[828px] flex-col items-center justify-center gap-4 overflow-clip px-[--page-padding] pb-[94px] text-center align-top xl:pb-[128px]"
      style={{
        minHeight: "calc(100svh - var(--header-height) - var(--vote-ticker-height))",
      }}
    >
      <Image priority className="w-[80%]" src={heroImage} alt="decorative hero image" />
      <h1 className="text-gradient-oval px-[20%] text-center text-sm-fluid  md:text-md-fluid lg:text-lg-fluid">
        Get paid to use oracles
      </h1>
      <div className="flex flex-col items-center gap-6 lg:w-[80%] xl:flex-row xl:gap-8">
        <h3 className="px-[20%] text-xl text-[#B3B5B4] xl:px-0">
          Your protocol creates value when it consumes price updates. Capture this value with Oval.
        </h3>
        <Link
          className="w-full justify-self-end whitespace-nowrap rounded-lg bg-red px-6 py-4 text-lg text-background no-underline transition hover:opacity-75 xl:w-fit"
          href="https://demo.oval.uma.xyz/"
          target="_blank"
        >
          Try Oval today
        </Link>
      </div>
    </section>
  );
};
