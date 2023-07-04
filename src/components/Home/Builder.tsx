import Tabs from "@/components/Home/Tabs";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import OOLogo from "public/assets/oo-logo.svg";
import { useRef } from "react";
import { SectionHeader } from "../SectionHeader";

export default function Builder() {
  const id = "builder";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  return (
    <div
      className="px-[--page-padding] pb-16 pt-[--header-blur-height]"
      id={id}
      style={{
        background: "linear-gradient(180deg, var(--white) 0%, var(--white-200) 50%, var(--white) 100%)",
      }}
    >
      <div ref={ref} className="mx-auto max-w-[--page-width]">
        <SectionHeader
          hasCircleFilter={false}
          title={
            <>
              Participate as a <strong>Builder</strong>
            </>
          }
          header={
            <>
              {" "}
              <span>Launch products with the</span>
              <span className="mx-2 inline-block align-middle sm:mx-4">
                <OOLogo
                  className="h-[--sm-fluid-font-size] 
                  w-[calc(var(--sm-fluid-font-size)_*_2)]
                  md:h-[--md-fluid-font-size]
                  md:w-[calc(var(--md-fluid-font-size)_*_2)] 
                  lg:h-[--lg-fluid-font-size] 
                  lg:w-[calc(var(--lg-fluid-font-size)_*_2)]"
                />
              </span>
              <span>as your backbone</span>
            </>
          }
        />
        <Tabs />
      </div>
    </div>
  );
}
