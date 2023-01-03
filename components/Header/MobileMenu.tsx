import { grey200, grey500, links, socialLinks, white } from "constant";
import NextLink from "next/link";
import styled, { CSSProperties } from "styled-components";
import { isExternalLink } from "utils";
import UpRightArrow from "public/assets/up-right-arrow.svg";

interface Props {
  show: boolean;
  hide: () => void;
  isLightTheme: boolean;
}

export function MobileMenu({ show, hide, isLightTheme }: Props) {
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
      <PaddingItem />
      <LinkWrapper>
        {links.map(({ href, label }) => (
          <Link onClick={hide} key={href} href={href} target={isExternalLink(href) ? "_blank" : undefined}>
            {label}
            {isExternalLink(href) && <ArrowIcon />}
          </Link>
        ))}
      </LinkWrapper>

      <SocialLinks>
        {socialLinks.map(({ href, Icon }) => (
          <SocialLink onClick={hide} key={href} href={href} target="_blank">
            <Icon />
          </SocialLink>
        ))}
      </SocialLinks>
    </Wrapper>
  );
}

export const Wrapper = styled.nav`
  width: 100%;
  min-height: calc(100vh - 56px);
  position: absolute;
  top: 56px;
  left: 0;
  background: var(--background);
  transform: var(--transform);
  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
  transition: transform var(--animation-duration) ease-out, opacity var(--animation-duration) ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;
`;

const Link = styled(NextLink)`
  position: relative;
  align-items: center;

  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  width: fit-content;
  align-items: center;
  justify-content: flex-start;

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

const ArrowIcon = styled(UpRightArrow)``;

const PaddingItem = styled.div``;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  flex-basis: 32%;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 32px;
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
