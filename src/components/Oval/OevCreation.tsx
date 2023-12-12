import { cn } from "@/utils/styleUtils";
import Image, { StaticImageData } from "next/image";
import gavel from "public/assets/gavel.webp";
import sandwich from "public/assets/sandwich.webp";
import arbitrage from "public/assets/arbitrage.webp";
import Link from "next/link";

const content = [
  {
    icon: gavel,
    title: "Liquidation",
    text: [
      "Liquidations are a requirement for securing many dApps, particularly lending protocols.",
      "Searchers monitor the mempool for incoming prices that will trigger liquidations then bid to submit a transaction claiming the liquidation.",
    ],
  },
  {
    icon: sandwich,
    title: "Frontrunning",
    text: [
      "DEXes and protocols offering synthetic assets, perps and similar are vulnerable to frontrunning.",
      "Searchers see incoming transactions and bid high on gas and race to get their transactions added to the block first.",
    ],
  },
  {
    icon: arbitrage,
    title: "Arbitrage",
    text: [
      "Oracle prices update on a regular heartbeat, or when the price moves a certain percentage.",
      "Searchers exploit pricing inconsistencies between venues by buying where the price is lower and selling on higher priced venues.",
    ],
  },
];

export const OevCreation = () => {
  return (
    <section className="relative mx-auto mt-12 flex max-w-[700px] flex-col items-center gap-8 px-[--page-padding] text-center align-top xl:max-w-[1300px] xl:gap-[96px]">
      <h2 className="text-gradient-oval px-[20%] text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid">
        OEV Creation
      </h2>
      <div className="flex flex-col gap-3 xl:flex-row xl:gap-6">
        {content.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      <Link
        className="w-full justify-self-end whitespace-nowrap rounded-lg bg-red px-6 py-4 text-lg text-background no-underline transition hover:opacity-75 xl:w-fit"
        href="https://demo.oval.uma.xyz/"
        target="_blank"
      >
        Try OVAL today
      </Link>
    </section>
  );
};

type CardProps = {
  title: string;
  icon: StaticImageData;
  text: string[];
  className?: string;
};

const Card = ({ title, icon, text, className }: CardProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-1 flex-col justify-start gap-3 rounded-[20px] border border-white/5 bg-white/5 p-6  text-white shadow-sm backdrop-blur-sm xl:pb-12",
        className,
      )}
    >
      <div className="flex flex-row items-center justify-start gap-3">
        <div className="text-md aspect-square h-[40px] rounded-[10px] border border-white/5 p-1 text-center text-white/50 shadow-md xl:h-[56px]">
          <Image alt={`Decorative icon representing ${title}`} src={icon} />
        </div>
        <div className="text-gradient-oval text-[32px] xl:text-[40px]">{title}</div>
      </div>
      <div className="flex flex-col gap-4">
        {text.map((text, i) => (
          <p key={i} className="text-gradient-oval text-left text-lg opacity-75">
            {text}
          </p>
        ))}
      </div>
      <span className="absolute bottom-[-1px] left-[-1px] h-20 w-[calc(100%+2px)] bg-gradient-to-b from-transparent to-background opacity-0 xl:opacity-100" />
    </div>
  );
};
