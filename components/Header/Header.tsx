import { addOpacityToHsl, grey200, white } from "constant";
import { motion } from "framer-motion";
import { useHeaderContext } from "hooks/contexts/useHeaderContext";
import styled, { CSSProperties } from "styled-components";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  const { isLightTheme } = useHeaderContext();
  return (
    <OuterWrapper
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.5, delay: 1 }}
      style={
        {
          "--background": isLightTheme ? white : grey200,
        } as CSSProperties
      }
    >
      <InnerWrapper>
        <DesktopHeader isLightTheme={isLightTheme} />
        <MobileHeader isLightTheme={isLightTheme} />
      </InnerWrapper>
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
  box-shadow: 0px 24px 24px 24px var(--background);
  transition: background var(--animation-duration), box-shadow var(--animation-duration);
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--page-width);
`;
