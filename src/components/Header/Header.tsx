import { grey200, white } from "@/constant";
import { useScrollContext } from "@/hooks/contexts/useScrollContext";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import styled, { CSSProperties } from "styled-components";

const MobileHeader = dynamic(() => import("./MobileHeader"));
const DesktopHeader = dynamic(() => import("./DesktopHeader"));

export default function Header() {
  const { isLightTheme } = useScrollContext();
  return (
    <OuterWrapper
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: "0%" }}
      transition={{ duration: 0.3, delay: 0.8 }}
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
  padding-top: 16px;
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
  margin-inline: auto;
  overflow: hidden;
`;
