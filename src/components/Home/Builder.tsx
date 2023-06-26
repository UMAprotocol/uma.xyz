import { lgFluidFontSize, mdFluidFontSize, mobileAndUnder, smFluidFontSize, tabletAndUnder } from "@/constant";
import { useLoadSectionRefAndId } from "@/hooks/helpers/useLoadSectionRefAndId";

import { Tabs } from "@radix-ui/react-tabs";
import OO from "public/assets/oo-logo.svg";
import { useRef } from "react";
import styled from "styled-components";
import { SectionHeader } from "../SectionHeader";
import { BaseOuterWrapper } from "../Wrappers";

export default function Builder() {
  const id = "builder";
  const ref = useRef<HTMLDivElement>(null);
  useLoadSectionRefAndId(ref, id);

  return (
    <OuterWrapper id={id}>
      <InnerWrapper ref={ref}>
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
  --desktop-height: ${lgFluidFontSize};
  --tablet-height: ${mdFluidFontSize};
  --mobile-height: ${smFluidFontSize};
  --height: var(--desktop-height);

  @media ${tabletAndUnder} {
    --height: var(--tablet-height);
  }

  @media ${mobileAndUnder} {
    --height: var(--mobile-height);
  }
`;
