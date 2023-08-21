import { useState } from "react";
import { PlusMinus } from "./PlusMinus";

export function Faq() {
  const [isMinus, setIsMinus] = useState(false);
  return (
    <section className="grid h-16 w-16 place-items-center bg-white text-grey-900">
      <PlusMinus isMinus={isMinus} />
      <button
        onClick={() => {
          setIsMinus(!isMinus);
        }}
      >
        Toggle
      </button>
    </section>
  );
}
