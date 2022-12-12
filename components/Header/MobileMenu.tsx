import { grey200, grey500, links, socialLinks, white } from "constant";
import NextLink from "next/link";
import styled, { CSSProperties } from "styled-components";
import { isExternalLink } from "utils";

interface Props {
  show: boolean;
  isLightTheme: boolean;
  onClickLink: () => void;
}

export function MobileMenu({ show, onClickLink, isLightTheme }: Props) {
  return (
    <Wrapper
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
      {links.map(({ href, label }, i) => (
        <Link onClick={onClickLink} key={i} href={href} target={isExternalLink(href) ? "_blank" : undefined}>
          {label}
        </Link>
      ))}
      <SocialLinks>
        {socialLinks.map(({ href, Icon }, i) => (
          <SocialLink key={i} href={href} target="_blank">
            <Icon />
          </SocialLink>
        ))}
      </SocialLinks>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 56px;
  left: 0;
  padding: 120px 20px;
  background: var(--background);
  transform: var(--transform);
  opacity: var(--opacity);
  pointer-events: var(--pointer-events);
  transition: transform var(--animation-duration) ease-out, opacity var(--animation-duration) ease-out;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Link = styled(NextLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 25px 0 4px;
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

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
  flex-basis: 32%;
  justify-content: flex-end;
  align-items: center;
  margin-top: 64px;
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
