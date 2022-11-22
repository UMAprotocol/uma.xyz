import { useState, useContext, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { VoteTicker } from "components";
import UnstyledHeadroom from "react-headroom";
import { HeaderContext } from "contexts";
import { useIsMounted, useWindowSize, useScrollPosition } from "hooks";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

interface Props {
  activeLink: number;
}

const Header: React.FC<Props> = ({ activeLink }) => {
  const {
    scrollPosition,
    boundingHeight,
    isMounted,
    headerRef,
    width,
    showMobileMenu,
    setShowMobileMenu,
    showHeader,
    addUnpinClass,
    setAddUnpinClass,
  } = useHeader();
  const isLightTheme = scrollPosition >= boundingHeight;

  return (
    <Section show={showHeader} ref={isMounted ? headerRef : null}>
      <VoteTicker theme="dark" numVotes={2} phase="commit" />
      <Headroom
        onUnfix={() => {
          setAddUnpinClass(true);
        }}
        onUnpin={() => {
          setShowMobileMenu(false);
        }}
        isLightTheme={isLightTheme}
        calcHeightOnResize
        className={addUnpinClass ? "unpinning" : ""}
      >
        {width > BREAKPOINTS.tb ? (
          <DesktopHeader activeLink={activeLink} scrollPosition={scrollPosition} isLightTheme={isLightTheme} />
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
    </Section>
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

  const [showHeader, setShowHeader] = useState(false);
  // Run reveal animation on mount
  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, headerDelayMS);
  }, []);

  const [addUnpinClass, setAddUnpinClass] = useState(false);
  useEffect(() => {
    if (addUnpinClass) {
      setTimeout(() => {
        setAddUnpinClass(false);
      }, 1000);
    }
  }, [addUnpinClass]);

  return {
    scrollPosition,
    boundingHeight,
    headerRef,
    isMounted: isMounted(),
    width,
    showMobileMenu,
    setShowMobileMenu,
    showHeader,
    addUnpinClass,
    setAddUnpinClass,
  };
}

export default Header;

interface IStyledProps {
  isLightTheme: boolean;
}

interface IHeaderProps {
  show: boolean;
}

const headerDelayMS = 3000;

const headerReveal = keyframes`
  0% {opacity: 0; transform: translateY(-30px);}
  100% {opacity: 1; transform: translateY(0px);}
`;

const Section = styled.div<IHeaderProps>`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  animation: ${headerReveal} 1s ease-in-out;
  animation-delay: ${headerDelayMS}ms;
  opacity: 1;
`;

const unpinning = keyframes`
  0% {opacity: .5; transform: translateY(-60px);}
  100% {opacity: 1; transform: translateY(0px);}
`;

const Headroom = styled(UnstyledHeadroom)<IStyledProps>`
  &.unpinning {
    > div {
      animation: ${unpinning} 0.5s ease-in-out;
    }
  }
  > div {
    // lib overwrites it without important
    z-index: 1000 !important;
    margin: 0;
    background: ${({ isLightTheme }) => {
      return isLightTheme ? "var(--white)" : "var(--grey-200)";
    }};
    transition: all 0.2s ease-in-out;

    @media ${QUERIES.md.andDown} {
      height: 60px;
      width: 100%;
    }
    &.headroom--pinned.headroom--scrolled {
      &:after {
        content: "";
        width: 100%;
        height: 48px;
        position: fixed;
        backdrop-filter: blur(1px);
      }
    }
  }
`;

interface IStyledProps {
  isLightTheme: boolean;
}
