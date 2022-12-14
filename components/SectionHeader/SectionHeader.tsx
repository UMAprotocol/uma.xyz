import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import { motion } from "framer-motion";
import { useState } from "react";
import styled, { CSSProperties } from "styled-components";

const HeaderWrapper = styled.div`
  position: relative;
`;

const Title = styled(motion.h1)`
  font: var(--header-sm);
  padding-bottom: 16px;
  border-bottom: 1px solid var(--grey-600);
  @media ${mobileAndUnder} {
    padding-bottom: 12px;
    font: var(--body-lg);
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
  hasCircleFilter?: boolean;
};

export function SectionHeader({ title, header, constrainWidth, hasCircleFilter = true }: SectionHeaderProps) {
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
        {hasCircleFilter && <CircleFilter />}
      </Header>
    </HeaderWrapper>
  );
}

function CircleFilter() {
  const [showCircle, setShowCircle] = useState(false);
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <CircleFilterWrapper
      onMouseEnter={() => {
        setShowCircle(true);
      }}
      onMouseLeave={() => {
        setShowCircle(false);
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
    >
      <Circle
        style={
          {
            opacity: showCircle ? 1 : 0,
            "--x-pos": x.toFixed() + "px",
            "--y-pos": y.toFixed() + "px",
          } as CSSProperties
        }
      />
    </CircleFilterWrapper>
  );
}

const CircleFilterWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Circle = styled.div`
  position: absolute;
  --height: 200px;
  --half-height: calc(var(--height) / 2);
  height: var(--height);
  top: calc(var(--y-pos) - var(--half-height));
  left: calc(var(--x-pos) - var(--half-height));
  aspect-ratio: 1/1;
  border-radius: 50%;
  backdrop-filter: brightness(2) saturate(20) hue-rotate(76.5deg);
  transition: opacity var(--animation-duration);
  pointer-events: none;
`;
