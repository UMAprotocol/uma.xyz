import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import { motion } from "framer-motion";
import styled, { CSSProperties } from "styled-components";

const HeaderWrapper = styled.div``;

const Title = styled(motion.h1)`
  font: var(--header-sm);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--grey-600);
  @media ${mobileAndUnder} {
    padding-bottom: 12px;
  }
`;

const Header = styled(motion.h2)`
  --width-desktop-tablet: 1020px;
  --width-laptop: 720px;
  --width-mobile: 100%;
  --width: var(--width-desktop-tablet);
  max-width: var(--max-width);
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
      <Title
        initial={{ opacity: 0.1, rotate: "-2deg" }}
        whileInView={{ opacity: 1, rotate: "0deg" }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.6 }}
      >
        {typeof title === "string" ? (
          title
        ) : (
          <>
            {title.text} {title.redSuffix && <RedEmphasis>{title.redSuffix}</RedEmphasis>}
          </>
        )}
      </Title>
      <Header
        initial={{ opacity: 0.1, rotate: "1deg" }}
        whileInView={{ opacity: 1, rotate: "0deg" }}
        viewport={{ once: true, amount: "all" }}
        transition={{ duration: 0.6 }}
        style={
          {
            "--max-width": constrainWidth ? "max(70%, 720px)" : "var(--width)",
          } as CSSProperties
        }
      >
        {header}
      </Header>
    </HeaderWrapper>
  );
}
