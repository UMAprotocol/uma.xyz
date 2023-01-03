import { MailChimpForm, VoteTicker } from "components";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { footerLinks, laptopAndUnder, mobileAndUnder, socialLinks, tabletAndUnder } from "constant";
import NextLink from "next/link";
import UmaLogo from "public/assets/uma-logo.svg";
import UpRightArrowBlack from "public/assets/up-right-arrow-black.svg";
import styled from "styled-components";
import { isExternalLink } from "utils";

export function Footer() {
  return (
    <OuterWrapper as="footer">
      <VoteTicker isLightTheme />
      <InnerWrapper>
        <LinksWrapper>
          <HomeLink href="#">
            <UmaLogoIcon />
          </HomeLink>
          <LinksList links={footerLinks.internal} />
          <LinksList links={footerLinks.external} />
        </LinksWrapper>
        <FormWrapper>
          <FormTitle>Receive the latest UMA and OO news, straight to your inbox.</FormTitle>
          <MailChimpForm />
        </FormWrapper>
      </InnerWrapper>
      <SubFooter>
        <Copyright>© {new Date().getFullYear()} Risk Labs Foundation</Copyright>
        <SocialLinks>
          {socialLinks.map(({ href, Icon }) => (
            <SocialLink key={href} href={href} target="_blank">
              <Icon />
            </SocialLink>
          ))}
        </SocialLinks>
      </SubFooter>
    </OuterWrapper>
  );
}

function LinksList({ links }: { links: { label: string; href: string }[] }) {
  return (
    <LinksListWrapper>
      {links.map(({ label, href }) => (
        <LinkListItem key={label}>
          <Link href={href} target={isExternalLink(href) ? "_blank" : undefined}>
            {label}
            {isExternalLink(href) && <ExternalLinkIcon />}
          </Link>
        </LinkListItem>
      ))}
    </LinksListWrapper>
  );
}

const ExternalLinkIcon = styled(UpRightArrowBlack)``;

const OuterWrapper = styled(BaseOuterWrapper)`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
  background: var(--grey-700);
  background-image: url("assets/footer-lines-grey.png");
`;

const InnerWrapper = styled.div`
  width: 100%;
  max-width: var(--page-width);
  margin-inline: auto;
  margin-top: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${tabletAndUnder} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    gap: 64px;
    justify-content: start;
  }

  @media ${mobileAndUnder} {
    gap: 24px;
    margin-top: 56px;
    justify-content: center;
  }
`;

const LinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: start;

  @media ${laptopAndUnder} {
    grid-template-columns: auto;
    grid-template-rows: repeat(3, auto);
    gap: 16px;
  }

  @media ${mobileAndUnder} {
    grid-row-start: 2;
    justify-content: center;
    margin-top: 80px;
  }
`;

const HomeLink = styled(NextLink)`
  margin-bottom: 32px;
  @media ${mobileAndUnder} {
    display: none;
  }
`;

const LinksListWrapper = styled.ul`
  list-style: none;
  width: fit-content;
`;

const LinkListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const Link = styled(NextLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--grey-200);
  font: var(--body-sm);
  text-decoration: none;
  transition: opacity var(--animation-duration);
  &:hover {
    opacity: 0.5;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;

  @media ${tabletAndUnder} {
    justify-items: start;
    margin-bottom: 32px;
  }

  @media ${mobileAndUnder} {
    grid-row-start: 1;
    justify-items: center;
  }
`;

const FormTitle = styled.h3`
  font: var(--body-lg);
  color: var(--grey-300);
  width: 100%;
  max-width: 338px;
  margin-bottom: 32px;
  @media ${laptopAndUnder} {
    max-width: 640px;
  }
  @media ${tabletAndUnder} {
    text-align: left;
  }
  @media ${mobileAndUnder} {
    text-align: center;
    margin-top: 24px;
    margin-bottom: 36px;
  }
`;

const SubFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--page-width);
  margin-inline: auto;
  margin-bottom: 64px;

  @media ${mobileAndUnder} {
    flex-direction: column;
    gap: 24px;
  }
`;

const Copyright = styled.p`
  font: var(--body-sm);
  color: var(--grey-500);
`;

const UmaLogoIcon = styled(UmaLogo)`
  path {
    fill: var(--red);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

const SocialLink = styled(NextLink)`
  path {
    fill: var(--grey-200);
    transition: fill var(--animation-duration);
  }
  &:hover {
    path {
      fill: var(--red);
    }
  }
`;
