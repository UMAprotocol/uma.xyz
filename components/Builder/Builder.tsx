import { Tabs } from "components";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import OO from "public/assets/oo-logo.svg";
import styled from "styled-components";
import { BaseOuterWrapper } from "components/style/Wrappers";

export function Builder() {
  return (
    <OuterWrapper id="builder">
      <InnerWrapper>
        <Title>
          Participate as a <RedEmphasis>Builder</RedEmphasis>
        </Title>
        <Header>
          <span>Launch products with the</span>
          <OOIconWrapper>
            <OOIcon />
          </OOIconWrapper>
          <span>as your backbone</span>
        </Header>
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

const Title = styled.h1`
  font: var(--header-sm);
  border-bottom: 1px solid var(--grey-600);
  @media ${mobileAndUnder} {
    font: var(--body-lg);
  }
`;

const Header = styled.h2`
  font: var(--header-lg);
  margin-top: 48px;
  margin-bottom: 128px;
  @media ${laptopAndUnder} {
    max-width: 720px;
  }
  @media ${mobileAndUnder} {
    font: var(--header-sm);
    margin-top: 24px;
    margin-bottom: 32px;
  }
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

const RedEmphasis = styled.span`
  color: var(--red);
`;
