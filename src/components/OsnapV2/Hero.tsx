import Image from "next/image";
import bgImage from "public/assets/bg-image.png";
import { InitialLoadTryOsnapModal } from "./InitialLoadTryOsnapModal";
import { TryOsnapButton } from "./TryOsnapButton";
import { TvsChip } from "@/components/OsnapV2/TvsChip";

export function Hero() {
  return (
    <section className="-mt-[calc(var(--header-height)+var(--vote-ticker-height))] bg-white px-page-padding pb-8 pt-[150px] md:pb-12 lg:pb-[72px] lg:pt-[200px]">
      <Image src={bgImage} alt="bg image" className="absolute inset-0 isolate -z-10 h-full w-full" layout="fill" />
      <TvsChip className="mx-auto" />
      <h1 className="mb-3 mt-6 bg-gradient-to-r from-grey-900 to-grey-900/60 bg-clip-text text-center text-4xl font-medium text-transparent sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
        Offchain governance.
        <br />
        Onchain execution.
      </h1>
      <p className="mx-auto mb-6 max-w-[568px] text-center text-lg text-grey-600 md:mb-7">
        Optimistically execute governance transactions onchain where your community can approve them.
      </p>
      <TryOsnapButton />
      <InitialLoadTryOsnapModal />
    </section>
  );
}
