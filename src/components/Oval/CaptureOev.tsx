import { cn } from "@/utils/styleUtils";
import { Divider } from "./Divider";

const content = [
  "Oracle price updates create a type of MEV called Oracle Extractable Value.",
  "Searcher bots and block builders profit by working together to extract OEV from protocols.",
  "Oval wraps your Chainlink Data Feed and forces searchers to pay you for the right to extract OEV.",
];

export const CaptureOev = () => {
  return (
    <section className="relative mx-auto mt-12 flex max-w-[1200px] flex-col items-center gap-4 px-[--page-padding] text-center align-top">
      <h2 className="text-gradient-oval px-[10%] text-center text-sm-fluid md:text-md-fluid lg:text-lg-fluid">
        Reclaim Oracle Extractable Value with Oval
      </h2>
      <h3 className="text:md bg-gradient-to-r from-white to-[hsla(0,0%,72%,1)] bg-clip-text text-center text-transparent opacity-75 lg:text-sm-fluid">
        Oracle Value Aggregation Layer
      </h3>
      <div className="mt-8 flex flex-col gap-2 lg:gap-3 xl:flex-row xl:items-center xl:gap-0">
        {content.map((item, i) => (
          <>
            <Card key={i} number={i} text={item} />
            {i < content.length - 1 && <Divider className="hidden w-[5%] xl:inline" />}
          </>
        ))}
      </div>
    </section>
  );
};

type CardProps = {
  number: number;
  text: React.ReactNode;
  className?: string;
};

const Card = ({ number, text, className }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-1 flex-row items-center gap-4 rounded-[20px] border border-white/5 bg-white/5 p-6 text-lg text-white shadow-sm backdrop-blur-sm",
        className,
      )}
    >
      <div className="text-md mb-auto aspect-square h-[2em] w-[2em] rounded-[10px] border border-white/5 text-center text-white/50 shadow-md">
        {number}
      </div>
      <span className="text-left opacity-75">{text}</span>
    </div>
  );
};
