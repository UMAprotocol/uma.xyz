import { Tabs } from "components";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import OO from "public/assets/oo-logo.svg";
import styled from "styled-components";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { SectionHeader } from "components/SectionHeader/SectionHeader";

export function Builder() {
  return (
    <OuterWrapper id="builder">
      <InnerWrapper>
        <SectionHeader
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
  background: var(--white);
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
  width: var(--width);
  height: var(--height);
  --desktop-width: 164px;
  --desktop-height: 82px;
  --laptop-width: 124px;
  --laptop-height: 62px;
  --tablet-width: 114px;
  --tablet-height: 57px;
  --mobile-width: 64px;
  --mobile-height: 32px;
  --width: var(--desktop-width);
  --height: var(--desktop-height);

  @media ${laptopAndUnder} {
    --width: var(--laptop-width);
    --height: var(--laptop-height);
  }

  @media ${tabletAndUnder} {
    --width: var(--tablet-width);
    --height: var(--tablet-height);
  }

  @media ${mobileAndUnder} {
    --width: var(--mobile-width);
    --height: var(--mobile-height);
  }
`;
