import { Description } from "../OsnapV2/Description";
import { Hero } from "../OsnapV2/Hero";
import { Steps } from "../OsnapV2/Steps";

export function OsnapV2() {
  return (
    <div className="bg-white">
      <Hero />
      <Steps />
      <Description />
    </div>
  );
}
