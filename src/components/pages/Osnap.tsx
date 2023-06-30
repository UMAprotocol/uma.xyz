import { Description } from "../Osnap/Description";
import { Faq } from "../Osnap/Faq";
import { Hero } from "../Osnap/Hero";
import { HowItWorks } from "../Osnap/HowItWorks";
import { Scaling } from "../Osnap/Scaling";
import { Video } from "../Osnap/Video";

export function Osnap() {
  return (
    <div className="bg-white">
      <Hero />
      <Description />
      <Scaling />
      <HowItWorks />
      <Video />
      <Faq />
    </div>
  );
}
