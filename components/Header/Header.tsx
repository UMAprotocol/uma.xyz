import { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { VoteTicker } from "components";
import { useScrollPosition } from "hooks";
import UnstyledHeadroom from "react-headroom";
import { HeaderContext } from "contexts";
import { useIsMounted } from "hooks";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface Props {
  activeLink: number;
  topOfHowItWorks: number;
  topOfVoteParticipation: number;
  topOfBuilder: number;
}

const Header: React.FC<Props> = ({ activeLink, topOfBuilder, topOfHowItWorks, topOfVoteParticipation }) => {
  const { scrollPosition, boundingHeight, isMounted, headerRef, width, showMobileMenu, setShowMobileMenu } =
    useHeader();
  const isLightTheme = scrollPosition >= boundingHeight;
  return (
    <div ref={isMounted ? headerRef : null}>
      <VoteTicker theme="dark" numVotes={2} phase="Commit" />
      <Headroom isLightTheme={isLightTheme} style={{ paddingTop: "24px" }}>
        {width > BREAKPOINTS.tb ? (
          <DesktopHeader
            activeLink={activeLink}
            scrollPosition={scrollPosition}
            isLightTheme={isLightTheme}
            topOfHowItWorks={topOfHowItWorks}
            topOfVoteParticipation={topOfVoteParticipation}
            topOfBuilder={topOfBuilder}
          />
        ) : (
          <MobileHeader
            showMobileMenu={showMobileMenu}
            onToggle={() => {
              setShowMobileMenu((pv) => !pv);
            }}
            isLightTheme={isLightTheme}
          />
        )}
      </Headroom>
    </div>
  );
};

function useHeader() {
  const { boundingHeight, updateRef, lightRefs } = useContext(HeaderContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  const isMounted = useIsMounted();
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (isMounted() && !lightRefs.header.current) {
      updateRef(headerRef, "header");
    }
  }, [isMounted, updateRef, lightRefs.header]);
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
  isLightTheme: boolean;
}

const Headroom = styled(UnstyledHeadroom)<IStyledProps>`
  @media ${QUERIES.tb.andDown} {
    background: ${({ isLightTheme }) => {
      return isLightTheme ? "var(--grey-900)" : "var(--grey-200)";
    }};
  }
  > div {
    margin: 0;
    background: ${({ isLightTheme }) => {
      return isLightTheme ? "var(--grey-900)" : "var(--grey-200)";
    }};
  }
`;

interface IStyledProps {
  isLightTheme: boolean;
}
