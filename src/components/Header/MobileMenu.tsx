import { grey200, grey500, links, socialLinks, white } from "constant";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import { useEffect, useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { isExternalLink } from "utils";

const LottieAnimation = dynamic(() => import("@/components/LottieAnimation"));

interface Props {
  show: boolean;
  hide: () => void;
  isLightTheme: boolean;
}

export default function MobileMenu({ show, hide, isLightTheme }: Props) {
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    if (show && !animationData) {
      void import("public/assets/lottie/hero.json").then(setAnimationData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <Wrapper
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Menu"
      style={
        {
          "--background": isLightTheme ? white : grey200,
          "--transform": show ? "translateY(0)" : "translateY(-20px)",
          "--opacity": show ? 1 : 0,
          "--pointer-events": show ? "all" : "none",
          "--link-color": isLightTheme ? grey500 : white,
        } as CSSProperties
      }
    >
      <Background>{animationData && <LottieHeroAnimation play={show} animationData={animationData} />}</Background>
      <Links>
        {links.map(({ href, label }) => (
          <Link onClick={hide} key={href} href={href} target={isExternalLink(href) ? "_blank" : undefined}>
            {label} {isExternalLink(href) ? <ExternalLinkIcon /> : null}
          </Link>
        ))}
      </Links>
      <SocialLinks>
        {socialLinks.map(({ href, Icon, label }) => (
          <SocialLink onClick={hide} key={href} href={href} target="_blank" aria-label={label}>
            <Icon />
          </SocialLink>
        ))}
      </SocialLinks>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  min-height: calc(100vh - 124px);
  position: absolute;
  top: 56px;
  left: 0;
  background: var(--background);
  transform: var(--transform);
  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
  transition: transform var(--animation-duration), opacity var(--animation-duration);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.15;
`;

const Link = styled(NextLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  font: var(--body-sm);
  color: var(--link-color);
  text-decoration: none;
  path {
    stroke: var(--link-color);
  }
  &:hover {
    opacity: 0.75;
  }
`;

const Links = styled.div`
  display: grid;
  place-items: center;
  gap: 16px;
  margin-top: 25%;
  margin-block: auto;
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
  padding-bottom: 22px;
  height: fit-content;
`;

const SocialLink = styled(NextLink)`
  path {
    fill: var(--link-color);
  }
  &:hover {
    path {
      fill: var(--red);
    }
  }
`;

const ExternalLinkIcon = styled(SmUpRightArrow)`
  margin-left: 8px;
`;

const LottieHeroAnimation = styled(LottieAnimation)`
  margin-inline: auto;
`;
