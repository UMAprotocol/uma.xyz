import Image from "next/image";
import snapshotScreenshot from "public/assets/snapshot-screenshot.png";

export function Description() {
  return (
    <section className="bg-grey-25 px-4 py-8 sm:px-8 md:px-16 lg:py-[96px] xl:px-[214px]">
      <Image src={snapshotScreenshot} alt="screenshot of the snapshot.org main page" className="mb-6 lg:mb-12" />
      <h1 className="mb-2 text-center text-4xl font-medium text-grey-500 sm:text-5xl md:mb-5 md:text-6xl lg:text-8xl">
        Cheaper. Faster.
        <br />
        <span className="text-primary-500">More inclusive.</span>
      </h1>
      <p className="mx-auto mb-5 max-w-[724px] text-center text-lg text-grey-600 sm:text-2xl">
        Add oSnap to your existing Snapshot Space and Safe&#123;wallet&#125; in minutes.
      </p>
      <p className="mx-auto mb-7 max-w-[724px] text-center text-lg text-grey-600 sm:text-2xl lg:mb-6">
        Combine the advanced strategies and gasless experience of offchain voting with the speed and security of
        trustless execution.
      </p>
      <button className="mx-auto block rounded-xl bg-grey-900 px-4 py-3 text-lg font-medium text-white">
        Try oSnap
      </button>
    </section>
  );
}
