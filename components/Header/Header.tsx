import { BaseOuterWrapper } from "components/style/Wrappers";
import { addOpacityToHsl, grey200, white } from "constant";
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
      as="header"
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

const OuterWrapper = styled(BaseOuterWrapper)`
  height: var(--header-height);
  display: grid;
  place-items: center;
  padding-top: 16px;
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
