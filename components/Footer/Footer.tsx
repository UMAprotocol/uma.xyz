import { VoteTicker } from "components";
import { BaseOuterWrapper } from "components/style/Wrappers";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant";
import NextLink from "next/link";
import BlackCircle from "public/assets/black-circle.svg";
import Discord from "public/assets/discord.svg";
import Discourse from "public/assets/discourse.svg";
import Github from "public/assets/github.svg";
import Twitter from "public/assets/twitter.svg";
import UmaLogo from "public/assets/uma-logo.svg";
import UpRightArrowBlack from "public/assets/up-right-arrow-black.svg";
import { SyntheticEvent, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";
import { isExternalLink } from "utils";

export function Footer() {
  const [value, setValue] = useState("");

  const internalLinks = [
    {
      label: "How it works",
      href: "#how-it-works",
    },
    {
      label: "For voters",
      href: "#voter",
    },
    {
      label: "For builders",
      href: "#builder",
    },
  ];

  const externalLinks = [
    {
      label: "Oracle",
      href: "https://optimistic-oracle-dapp.vercel.app/",
    },
    {
      label: "Docs",
      href: "https://docs.umaproject.org/",
    },
    {
      label: "Projects",
      href: "https://projects.umaproject.org/",
    },
  ];

  const socialLinks = [
    {
      href: "http://discord.umaproject.org",
      Icon: Discord,
    },
    {
      href: "https://twitter.com/UMAprotocol",
      Icon: BlackCircle,
    },
    {
      href: "https://twitter.com/UMAprotocol",
      Icon: Twitter,
    },
    {
      href: "https://discourse.umaproject.org/",
      Icon: Discourse,
    },
    {
      href: "https://github.com/UMAprotocol",
      Icon: Github,
    },
  ];

  return (
    <OuterWrapper as="footer">
      <VoteTicker isLightTheme />
      <InnerWrapper>
        <LinksWrapper>
          <HomeLink href="#">
            <UmaLogoIcon />
          </HomeLink>
          <LinksList links={internalLinks} />
          <LinksList links={externalLinks} />
        </LinksWrapper>
        <FormWrapper>
          <FormTitle>Receive the latest UMA and OO news, straight to your inbox.</FormTitle>
          <MailchimpSubscribe
            url={process.env.NEXT_PUBLIC_MAILCHIMP_URL || ""}
            render={({ subscribe, status, message }) => (
              <>
                <Form
                  onSubmit={(evt: SyntheticEvent<HTMLFormElement>) => {
                    evt.preventDefault();
                    // @ts-expect-error Doesn't like the input being taken like this
                    subscribe({ EMAIL: evt.target[0].value }); // eslint-disable-line
                  }}
                >
                  <Input
                    type="email"
                    name="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Your Email"
                  />

                  <SubmitButton type="submit">Sign up</SubmitButton>
                </Form>
                {status === "sending" && <StatusMessage>Sending...</StatusMessage>}
                {status === "error" && (
                  <StatusMessage
                    style={{ color: "var(--red)" }}
                    dangerouslySetInnerHTML={{ __html: message as string }}
                  />
                )}
                {status === "success" && <StatusMessage style={{ color: "#20a93e" }}>Subscribed!</StatusMessage>}
              </>
            )}
          />
        </FormWrapper>
      </InnerWrapper>
      <SubFooter>
        <Copyright>© 2022 Risk Labs Foundation</Copyright>
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
  height: fit-content;
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
    justify-items: center;
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
  &:hover {
    opacity: 0.5;
  }
`;

const FormWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: end;

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

const Form = styled.form`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: flex-end;

  @media ${mobileAndUnder} {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  height: 48px;
  width: 100%;
  max-width: 350px;
  background: var(--white);
  color: var(--grey-200);
  outline: none;
  font: var(--body-md);
  caret-color: var(--grey-100);
  border: 2px solid transparent;
  border-radius: 8px;
  transition: border-color var(--animation-duration);
  &:hover {
    border: 2px solid var(--grey-500);
  }
  @media ${laptopAndUnder} {
    max-width: 528px;
  }
  @media ${mobileAndUnder} {
    max-width: 100%;
  }
`;

const SubmitButton = styled.button`
  height: 48px;
  min-width: fit-content;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 12px;
  gap: 2px;
  background: var(--red);
  border-radius: 8px;
  color: var(--grey-800);
  font: var(--body-md);
  transition: opacity var(--animation-duration);
  &:hover {
    opacity: 0.5;
  }
  @media ${mobileAndUnder} {
    width: 100%;
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

const StatusMessage = styled.div`
  font: var(--body-sm);
  color: var(--grey-300);
`;
