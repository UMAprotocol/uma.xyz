import { grey100, grey400, links, red, tabletAndUnder, white } from "constant";
import NextLink from "next/link";
import { useRouter } from "next/router";
import BlackLogo from "public/assets/uma-black-logo.svg";
import Logo from "public/assets/uma-white-logo.svg";
import { CSSProperties } from "react";
import styled from "styled-components";
import { isExternalLink } from "utils";

interface Props {
  isLightTheme: boolean;
}

export function DesktopHeader({ isLightTheme }: Props) {
  const router = useRouter();
  const isActive = (href: string) => router.pathname === href;

  return (
    <Wrapper>
      <HomeLink href="/">{isLightTheme ? <StyledLogoBlack /> : <StyledLogo />}</HomeLink>
      <Links>
        {links.map(({ label, href }, i) => (
          <Link
            key={i}
            href={href}
            target={isExternalLink(href) ? "_blank" : undefined}
            style={
              {
                "--color": isActive(href) ? red : grey400,
              } as CSSProperties
            }
          >
            <LinkWrapper>
              {isActive(href) ? <RedDot /> : i <= 2 ? <Dot /> : null} {label}
            </LinkWrapper>
          </Link>
        ))}
      </Links>
      <LaunchButton
        href="https://vote.umaproject.org"
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

const LinkWrapper = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: var(--page-width);
  margin: 0 auto;
  @media ${tabletAndUnder} {
    display: none;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 20px;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  margin-right: 8px;
  border-radius: 3px;
  visibility: hidden;
  background-color: var(--grey-400);
  position: absolute;
  left: -16px;
  opacity: 0.8;
`;

const RedDot = styled(Dot)`
  background: var(--red);
  visibility: visible;
  left: -12px;
  opacity: 1;
`;

const Link = styled(NextLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  left: 0;
  text-decoration: none;
  padding: 0;
  color: var(--color);
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  ${Dot} {
    transition: all 0.1s ease-in-out;
  }
  &:hover {
    opacity: 0.8;
    ${Dot} {
      visibility: visible;
      left: -12px;
    }
  }
`;

const HomeLink = styled(NextLink)``;

const LaunchButton = styled(NextLink)`
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  border-radius: 8px;
  font: var(--body-md);
  color: var(--color);
  background: var(--background);
  text-decoration: none;
  transition: opacity 0.2s ease-in-out;
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
