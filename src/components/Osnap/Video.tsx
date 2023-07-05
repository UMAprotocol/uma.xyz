import Link from "next/link";

export function Video() {
  return (
    <section className="bg-white px-6 py-8">
      <div className="mx-auto max-w-[858px]">
        <div className="relative mb-6 aspect-video before:absolute before:-inset-1 before:-z-10 before:bg-black before:opacity-75 before:blur-md">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/R97GIW5M_r0?controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              clipPath: "inset(0% 0% 0% 0% round 16px)",
            }}
          ></iframe>
        </div>
        <h2 className="mb-4 text-3xl text-grey-900 md:mb-5 md:text-center lg:text-6xl">
          DAO Governance in a <span className="text-red">snap.</span>
        </h2>
        <p className="mb-6 text-grey-600 md:mb-12 md:text-center">
          Visit the quick start guide and start using oSnap in minutes.
        </p>
        <Link
          className="mt-6 grid h-[40px] w-[148px] place-items-center rounded-xl bg-black text-white md:mx-auto"
          href="https://docs.uma.xyz/developers/osnap/osnap-quick-start"
        >
          Integrate oSnap
        </Link>
      </div>
    </section>
  );
}
