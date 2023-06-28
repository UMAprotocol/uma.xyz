import { Description } from "../Osnap/Description";
import { Hero } from "../Osnap/Hero";
import { Scaling } from "../Osnap/Scaling";

export function Osnap() {
  return (
    <div className="bg-white">
      <Hero />
      <Description />
      <Scaling />
    </div>
  );
}
