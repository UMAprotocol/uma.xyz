import { VoteTicker } from "components";
import { grey200, mobileAndUnder, white } from "constant";
import { HeaderContext } from "contexts";
import { useIsMounted, useScrollPosition } from "hooks";
import { useContext, useEffect, useRef, useState } from "react";
import UnstyledHeadroom from "react-headroom";
import styled, { CSSProperties, keyframes } from "styled-components";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

interface Props {
  activeLink: number;
  phase: "Commit" | "Reveal" | null;
  numVotes: number;
}

export function Header({ activeLink, phase, numVotes }: Props) {
  const {
    scrollPosition,
    boundingHeight,
    headerDelay,
    headerRef,
    showMobileMenu,
    setShowMobileMenu,
    showHeader,
    addUnpinClass,
    setAddUnpinClass,
  } = useHeader();
  const isLightTheme = scrollPosition >= boundingHeight;

  return (
    <Wrapper
      ref={headerRef}
      style={
        {
          "--visibility": showHeader ? "visible" : "hidden",
          "--animation-delay": `${headerDelay}ms`,
        } as CSSProperties
      }
    >
      {numVotes > 0 && <VoteTicker theme="dark" numVotes={numVotes} phase={phase} />}
      <Headroom
        onUnfix={() => {
          setAddUnpinClass(true);
        }}
        onUnpin={() => {
          setShowMobileMenu(false);
        }}
        calcHeightOnResize
        className={addUnpinClass ? "unpinning" : ""}
        style={
          {
            "--background": isLightTheme ? white : grey200,
          } as CSSProperties
        }
      >
        <DesktopHeader activeLink={activeLink} isLightTheme={isLightTheme} />
        <MobileHeader
          showMobileMenu={showMobileMenu}
          onToggle={() => {
            setShowMobileMenu((pv) => !pv);
          }}
          isLightTheme={isLightTheme}
        />
      </Headroom>
    </Wrapper>
  );
}

function useHeader() {
  const { boundingHeight, updateRef, lightRefs } = useContext(HeaderContext);
  const [scrollPosition, setScrollPosition] = useState(0);
  useScrollPosition(({ currPos }) => {
    setScrollPosition(Math.abs(currPos.y));
  }, []);
  const isMounted = useIsMounted();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const headerDelay = 3000;

  useEffect(() => {
    if (isMounted() && !lightRefs.header.current) {
      updateRef(headerRef, "header");
    }
  }, [isMounted, updateRef, lightRefs.header]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [showHeader, setShowHeader] = useState(false);
  // Run reveal animation on mount
  useEffect(() => {
    setTimeout(() => {
      setShowHeader(true);
    }, headerDelay);
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
    headerDelay,
    showMobileMenu,
    setShowMobileMenu,
    showHeader,
    addUnpinClass,
    setAddUnpinClass,
  };
}

const headerReveal = keyframes`
  0% {opacity: 0; transform: translateY(-30px);}
  100% {opacity: 1; transform: translateY(0px);}
`;

const Wrapper = styled.header`
  visibility: var(--visibility);
  animation: ${headerReveal} 1s ease-in-out;
  animation-delay: var(--animation-delay);
  opacity: 1;
`;

const unpinning = keyframes`
  0% {opacity: .5; transform: translateY(-60px);}
  100% {opacity: 1; transform: translateY(0px);}
`;

const Headroom = styled(UnstyledHeadroom)`
  &.unpinning {
    > div {
      animation: ${unpinning} 0.5s ease-in-out;
    }
  }
  > div {
    // lib overwrites it without important
    z-index: 1000 !important;
    margin: 0;
    background: var(--background);
    transition: all 0.2s ease-in-out;

    @media ${mobileAndUnder} {
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
