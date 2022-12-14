import { addOpacityToHsl, grey200, white } from "constant";
import { motion } from "framer-motion";
import { useHeaderContext } from "hooks/contexts/useHeaderContext";
import styled, { CSSProperties } from "styled-components";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  const { isLightTheme } = useHeaderContext();
  const whiteOpacity90 = addOpacityToHsl(white, 0.9);
  const grey200Opacity90 = addOpacityToHsl(grey200, 0.9);
  return (
    <OuterWrapper
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.5, delay: 1 }}
      style={
        {
          "--background": isLightTheme ? whiteOpacity90 : grey200Opacity90,
        } as CSSProperties
      }
    >
      <InnerWrapper>
        <DesktopHeader isLightTheme={isLightTheme} />
        <MobileHeader isLightTheme={isLightTheme} />
      </InnerWrapper>
      <BlurBackground />
    </OuterWrapper>
  );
}

const OuterWrapper = styled(motion.header)`
  height: var(--header-height);
  display: grid;
  place-items: center;
  padding-inline: var(--page-padding);
  position: sticky;
  top: 0;
  z-index: 2;
  background: var(--background);
  backdrop-filter: blur(6px);
  box-shadow: 0px 10px 20px 20px var(--background);
  transition: background var(--animation-duration), box-shadow var(--animation-duration);
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--page-width);
`;

const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-blur-height);
  background: var(--background);
  filter: blur(28px);
  z-index: -1;
  transition: background var(--animation-duration);
`;
