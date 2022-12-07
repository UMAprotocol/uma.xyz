import { grey200, white } from "constant";
import styled, { CSSProperties } from "styled-components";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  const isLightTheme = false;
  return (
    <Wrapper
      style={
        {
          "--background": isLightTheme ? white : grey200,
        } as CSSProperties
      }
    >
      <DesktopHeader isLightTheme={isLightTheme} />
      <MobileHeader isLightTheme={isLightTheme} />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
`;
