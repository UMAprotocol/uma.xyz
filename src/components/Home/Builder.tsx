import Tabs from "@/components/Home/Tabs";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";
import { useRef } from "react";
import { Icon } from "../Icon";
import { SectionHeader } from "../SectionHeader";

export default function Builder() {
  const id = "builder";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  return (
    <div
      ref={ref}
      className="px-[--page-padding] py-16 pt-[--header-blur-height]"
      id={id}
      style={{
        background: "linear-gradient(180deg, var(--white) 0%, var(--grey-50) 50%, var(--white) 100%)",
      }}
    >
      <div className="mx-auto max-w-[--page-width]">
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
                <Icon
                  name="oo-logo"
                  className="
                  text-red
                  h-[--sm-fluid-font-size] 
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
