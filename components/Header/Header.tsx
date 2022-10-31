import { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { VoteTicker } from "components";
import { useScrollPosition } from "hooks";
import UnstyledHeadroom from "react-headroom";
import { HeaderContext } from "contexts";
import { useIsMounted } from "hooks";
import { BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface Props {
  activeLink: number;
}

const Header: React.FC<Props> = ({ activeLink }) => {
  const { scrollPosition, boundingHeight, isMounted, headerRef, width, showMobileMenu, setShowMobileMenu } =
    useHeader();
  const inDarkSection = scrollPosition >= boundingHeight;
  return (
    <div ref={isMounted ? headerRef : null}>
      <VoteTicker theme="dark" numVotes={2} phase="Commit" />
      <Headroom inDarkSection={inDarkSection} style={{ paddingTop: "24px" }}>
        {width > BREAKPOINTS.tb ? (
          <DesktopHeader activeLink={activeLink} scrollPosition={scrollPosition} inDarkSection={inDarkSection} />
        ) : (
          <div />
        )}
      </Headroom>
      {width <= BREAKPOINTS.tb ? (
        <MobileHeader
          showMobileMenu={showMobileMenu}
          onToggle={() => {
            setShowMobileMenu((pv) => !pv);
          }}
          inDarkSection={inDarkSection}
        />
      ) : null}
    </div>
  );
};

function useHeader() {
  const { boundingHeight, updateRef } = useContext(HeaderContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  const isMounted = useIsMounted();
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isMounted()) {
      updateRef(headerRef, "header");
    }
  }, [isMounted, updateRef]);
  const { width } = useWindowSize();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return {
    scrollPosition,
    boundingHeight,
    headerRef,
    isMounted: isMounted(),
    width,
    showMobileMenu,
    setShowMobileMenu,
  };
}

export default Header;

interface IStyledProps {
  inDarkSection: boolean;
}

const Headroom = styled(UnstyledHeadroom)<IStyledProps>`
  > div {
    margin: 0 15px;

    background: ${({ inDarkSection }) => {
      return inDarkSection ? "var(--grey-900)" : "var(--grey-200)";
    }};
  }
`;
