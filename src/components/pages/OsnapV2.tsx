import { Faq } from "../OsnapV2/Faq";
import { Video } from "../OsnapV2/Video";
import { Description } from "../OsnapV2/Description";
import { Features } from "../OsnapV2/Features";
import { Hero } from "../OsnapV2/Hero";
import { Steps } from "../OsnapV2/Steps";
import { Partners } from "../OsnapV2/Partners";
import { TryOsnapModal } from "../Osnap/TryOsnapModal";

export function OsnapV2() {
  return (
    <>
      <Hero />
      <Partners />
      <Steps />
      <Description />
      <Features />
      <Video />
      <Faq />
      <TryOsnapModal />
    </>
  );
}
