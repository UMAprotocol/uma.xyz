import { mobileAndUnder } from "constant";
import { useLoadSectionRefAndId } from "hooks/helpers/useLoadSectionRefAndId";
import dynamic from "next/dynamic";
import OO from "public/assets/oo-logo.svg";
import { useRef } from "react";
import styled from "styled-components";
import { SectionHeader } from "./SectionHeader";
import { BaseOuterWrapper } from "./Wrappers";

const Tabs = dynamic(() => import("components/Tabs"));

export default function Builder() {
  const id = "builder";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  return (
    <OuterWrapper id={id}>
      <InnerWrapper ref={ref}>
        <SectionHeader
          hasCircleFilter={false}
          title={{ text: "Participate as a", redSuffix: "Builder" }}
          header={
            <>
              {" "}
              <span>Launch products with the</span>
              <OOIconWrapper>
                <OOIcon />
              </OOIconWrapper>
              <span>as your backbone</span>
            </>
          }
        />
        <Tabs />
      </InnerWrapper>
    </OuterWrapper>
  );
}

const OuterWrapper = styled(BaseOuterWrapper)`
  background: linear-gradient(180deg, var(--white) 0%, var(--white-200) 50%, var(--white) 100%);
`;

const InnerWrapper = styled.div`
  max-width: var(--page-width);
  margin-inline: auto;
`;

const OOIconWrapper = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-inline: 16px;
  @media ${mobileAndUnder} {
    margin-inline: 8px;
  }
`;

const OOIcon = styled(OO)`
  height: var(--height);
  width: calc(var(--height) * 2);

  height: var(--height);
  --desktop-height: 5rem;
  /* scales with the fluid typography on mobile by using the same clamp values */
  --mobile-height: clamp(2.5rem, 7vw + 1.18rem, 4rem);
  --height: var(--desktop-height);

  @media ${mobileAndUnder} {
    --height: var(--mobile-height);
  }
`;
