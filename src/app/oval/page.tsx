import { Metadata } from "next";
import Image from "next/image";
import { CaptureOev, Hero, OevLost, ReclaimOev, BuildSafely, Faq, FooterOval } from "@/components/Oval";
import { Layout } from "@/components/Layout";
import { IntegrateOvalModal } from "@/components/Oval/IntegrateOvalModal";
import { Suspense } from "react";
import { ONE_DAY_SECONDS } from "@/lib/constants";
import chainlinkIcon from "public/assets/chainlink.svg";
import redStoneIcon from "public/assets/redstone.svg";

export const revalidate = ONE_DAY_SECONDS;

const title = "Oval | Built by UMA";
const description =
  "Oval is an MEV capture technology that wraps price oracles and generates protocol revenue by auctioning the right to conduct liquidations";

export const metadata: Metadata = {
  metadataBase: new URL("https://uma.xyz"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title,
  description,
  twitter: {
    card: "summary_large_image",
    site: "@UMAprotocol",
    title,
    images: "/assets/oval-twitter-card.jpg",
  },
  openGraph: {
    title,
    description,
    images: "/assets/oval-twitter-card.jpg",
    url: "/oval",
  },
};
const SupportedOraclesSection = () => {
  const supportedOracles: { image: string; name: string; link: string }[] = [
    {
      image: chainlinkIcon as string,
      name: "Chainlink",
      link: "https://chain.link/",
    },
    {
      image: redStoneIcon as string,
      name: "Redstone",
      link: "https://redstone.finance/",
    },
  ];
  return (
    <section className="py-6 pb-[94px] xl:pb-[128px]">
      <div className="container mx-auto flex justify-center items-center space-x-6 xl:px-0">
        <span>
          <h3 className="text-gradient-oval text-center text-sm uppercase text-white/50 md:text-base lg:text-lg">
            SUPPORTED ORACLES
          </h3>
        </span>
        {supportedOracles.map(({ image, name, link }, index) => (
          <div key={index} className="mx-3 flex justify-center items-center" data-tip={name}>
            <a
              href={link}
              target="_blank"
              key={index}
              rel="noopener noreferrer"
              className="h-12 w-12 flex justify-center items-center relative cursor-pointer transition-transform duration-300 transform hover:scale-125 hover:bg-gray-700 p-1 rounded"
              data-tip={name}
            >
              <Image key={index} src={image} alt={name} className="h-full w-full object-contain" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Page() {
  return (
    <Layout showOvalBanner showTicker={false} page="OVAL">
      <Suspense>
        <IntegrateOvalModal />
      </Suspense>
      <Hero />
      <SupportedOraclesSection />
      <OevLost />
      <CaptureOev />
      <ReclaimOev />
      <BuildSafely />
      <Faq />
      <FooterOval />
    </Layout>
  );
}
