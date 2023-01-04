import { mobileAndUnder, laptopAndUnder, tabletAndUnder } from "constant";
import styled from "styled-components";

const HeaderWrapper = styled.div``;

const Title = styled.h1`
  font: var(--header-sm);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--grey-600);
  @media ${mobileAndUnder} {
    padding-bottom: 12px;
  }
`;

const Header = styled.h2<{ constrainWidth?: boolean }>`
  --width-desktop-tablet: 1020px;
  --width-laptop: 720px;
  --width-mobile: 100%;
  --width: var(--width-desktop-tablet);
  max-width: var(--width);
  max-width: ${({ constrainWidth }) => (constrainWidth ? "max(70%, 720px)" : "var(--width)")};
  margin-top: 48px;
  margin-bottom: 128px;
  font: var(--header-lg);
  @media ${laptopAndUnder} {
    --width: var(--width-laptop);
  }
  @media ${tabletAndUnder} {
    --width: var(--width-desktop-tablet);
  }
  @media ${mobileAndUnder} {
    --width: var(--width-mobile);
    font: var(--header-sm);
    margin-top: 24px;
    margin-bottom: 40px;
  }
`;
const RedEmphasis = styled.span`
  color: var(--red);
`;

type SectionHeaderProps = {
  title:
    | string
    | {
        text: string;
        redSuffix?: string;
      };
  header: string | JSX.Element;
  constrainWidth?: boolean;
};

export function SectionHeader({ title, header, constrainWidth }: SectionHeaderProps) {
  return (
    <HeaderWrapper>
      <Title>
        {typeof title === "string" ? (
          title
        ) : (
          <>
            {title.text} {title.redSuffix && <RedEmphasis>{title.redSuffix}</RedEmphasis>}
          </>
        )}
      </Title>
      <Header constrainWidth={constrainWidth}>{header}</Header>
    </HeaderWrapper>
  );
}
