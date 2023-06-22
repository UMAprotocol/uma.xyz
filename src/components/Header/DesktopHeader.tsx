import { grey100, grey400, links, red, tabletAndUnder, white } from "constant";
import NextLink from "next/link";
import SmUpRightArrow from "public/assets/sm-up-right-arrow.svg";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-white-logo.svg";
import { CSSProperties } from "react";
import styled from "styled-components";
import { isExternalLink } from "utils";

interface Props {
  isLightTheme: boolean;
}

export default function DesktopHeader({ isLightTheme }: Props) {
  function isActive(href: string) {
    if (typeof window === "undefined") return false;
    return window.location.href.includes(href);
  }

  return (
    <Wrapper>
      <HomeLink href="/" aria-label="Back to top">
        {isLightTheme ? <StyledLogoBlack /> : <StyledLogo />}
      </HomeLink>
      <Links>
        {links.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
            style={
              {
                "--color": isActive(href) ? red : grey400,
              } as CSSProperties
            }
          >
            <Dot /> <LinkText>{label}</LinkText> {isExternalLink(href) ? <ExternalLinkIcon /> : null}
          </Link>
        ))}
      </Links>
      <LaunchButton
        href="https://vote.uma.xyz"
        target="_blank"
        style={
          {
            "--color": isLightTheme ? white : grey100,
            "--background": isLightTheme ? grey100 : white,
          } as CSSProperties
        }
      >
        Launch app
      </LaunchButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  @media ${tabletAndUnder} {
    display: none;
  }
`;

const Links = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 20px;
`;

const Link = styled(NextLink)`
  --text-opacity: 1;
  --dot-opacity: 0;
  --dot-translate-x: -4px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--color);
  font: var(--body-md);
  transition: color var(--animation-duration), background-color var(--animation-duration);

  &:hover {
    --text-opacity: 0.8;
    --dot-opacity: 0.8;
    --dot-translate-x: 0;
  }
`;

const LinkText = styled.span`
  opacity: var(--text-opacity);
`;

const Dot = styled.span`
  display: inline-block;
  width: 8px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin-right: 8px;
  background: var(--color);
  opacity: var(--dot-opacity);
  transform: translateX(var(--dot-translate-x));
  transition: opacity var(--animation-duration), background-color var(--animation-duration),
    transform var(--animation-duration);
`;

const ExternalLinkIcon = styled(SmUpRightArrow)`
  margin-left: 8px;
`;

const HomeLink = styled(NextLink)``;

const LaunchButton = styled(NextLink)`
  justify-self: end;
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  border-radius: 8px;
  font: var(--body-md);
  color: var(--color);
  background: var(--background);
  text-decoration: none;
  transition: opacity var(--animation-duration) ease-in-out;
  &:hover {
    opacity: 0.75;
  }
`;

const StyledLogoBlack = styled(BlackLogo)`
  cursor: pointer;
`;

const StyledLogo = styled(Logo)`
  cursor: pointer;
`;
