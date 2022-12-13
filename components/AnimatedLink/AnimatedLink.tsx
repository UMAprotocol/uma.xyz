import NextLink from "next/link";
import UpRightArrow from "public/assets/up-right-arrow.svg";
import { ReactNode } from "react";
import styled from "styled-components";
import { isExternalLink } from "utils";

export function AnimatedLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} target={isExternalLink(href) ? "_blank" : undefined}>
      {children}
      <ArrowIconWrapper>
        <ArrowIcon />
      </ArrowIconWrapper>
    </Link>
  );
}

const Link = styled(NextLink)`
  display: flex;
  align-items: baseline;
  font: var(--body-lg);
  color: var(--red);
  text-decoration: none;
  &:hover {
    color: var(--grey-100);
  }
`;

const ArrowIcon = styled(UpRightArrow)`
  path: {
    transition: stroke var(--animation-duration) ease;
  }
`;

const ArrowIconWrapper = styled.div`
  position: relative;
  left: 0;
  margin-left: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid var(--red);
  border-radius: 8px;
  transition: margin var(--animation-duration) ease, border-color var(--animation-duration) ease,
    background-color var(--animation-duration) ease;

  ${Link}:hover & {
    border-color: var(--grey-100);
    background-color: var(--grey-100);
    margin-left: 12px;

    ${ArrowIcon} {
      path {
        stroke: var(--white);
      }
    }
  }
`;
