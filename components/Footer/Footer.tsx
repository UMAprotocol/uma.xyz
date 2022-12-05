import { VoteTicker } from "components";
import { largeAndUnder, medium, mediumAndUnder, tabletAndUnder } from "constant/breakpoints";
import { useWindowSize } from "hooks";
import BlackCircle from "public/assets/black-circle.svg";
import Discord from "public/assets/discord.svg";
import Discourse from "public/assets/discourse.svg";
import Github from "public/assets/github.svg";
import Twitter from "public/assets/twitter.svg";
import Logo from "public/assets/uma-logo.svg";
import UpRightArrowBlack from "public/assets/up-right-arrow-black.svg";
import { SyntheticEvent, useState } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import styled from "styled-components";

interface Props {
  phase: "Commit" | "Reveal" | null;
  numVotes: number;
}

const Footer: React.FC<Props> = ({ phase, numVotes }) => {
  const { value, setValue, width } = useFooter();
  return (
    <>
      {numVotes > 0 && <VoteTicker theme="light" numVotes={numVotes} phase={phase} />}
      <Section>
        <Wrapper>
          <BottomRow>
            <FooterLinks>
              {width > medium ? (
                <LogoWrapper>
                  <StyledLogo />
                </LogoWrapper>
              ) : null}
              <LinksFlex>
                <Links>
                  {middleLinks.map(({ label, href }, i) => (
                    <Link key={i} href={href}>
                      {label}
                    </Link>
                  ))}
                </Links>
                <Links>
                  {rightLinks.map(({ label, href, Logo }, i) => (
                    <Link key={i} href={href} target="_blank" rel="noreferrer">
                      {label} {Logo && <Logo style={{ display: "inline-flex", marginLeft: "4px" }} />}
                    </Link>
                  ))}
                </Links>
              </LinksFlex>
            </FooterLinks>

            <FormWrapper>
              {width <= medium ? (
                <LogoWrapper>
                  <StyledLogo />
                </LogoWrapper>
              ) : null}
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

                      <Button type="submit">Sign up</Button>
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
          </BottomRow>
          <CopyrightRow>
            <AddressWrapper>
              <div>© 2022 Risk Labs Foundation</div>
            </AddressWrapper>
            <SocialLinks>
              {socialLinks.map(({ href, Icon }, i) => (
                <SocialLink key={i} href={href} rel="noreferrer" target="_blank">
                  <Icon />
                </SocialLink>
              ))}
            </SocialLinks>
          </CopyrightRow>
        </Wrapper>
      </Section>
    </>
  );
};

export default Footer;

function useFooter() {
  const [value, setValue] = useState("");
  const { width } = useWindowSize();

  return { value, setValue, width };
}

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

const middleLinks = [
  {
    label: "How it works",
    href: "#howItWorks",
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

const rightLinks = [
  {
    label: "Oracle",
    href: "https://optimistic-oracle-dapp.vercel.app/",
    Logo: UpRightArrowBlack,
  },
  {
    label: "Docs",
    href: "https://docs.umaproject.org/",
    Logo: UpRightArrowBlack,
  },
  {
    label: "Projects",
    href: "https://projects.umaproject.org/",
    Logo: UpRightArrowBlack,
  },
];

const animationDuration = "0.3s";

const Section = styled.div`
  width: 100%;
  background: var(--grey-700);
  background-image: url("assets/footer-lines-grey.png");
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: left top;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: var(--max-section-width);
  margin: 0 auto;
  padding: 96px 0 66px;

  @media ${tabletAndUnder} {
    padding-top: 61px;
    padding-bottom: 32px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: initial;
  padding: 8px 0;
  gap: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 52%;
  gap: 116px;
  @media ${largeAndUnder} {
    flex-direction: column;
    gap: 32px;
    width: 30%;
  }
  @media ${tabletAndUnder} {
    justify-content: center;
    align-items: flex-start;
    align-self: flex-start;
  }
  @media ${mediumAndUnder} {
    align-items: center;
    align-self: center;
  }
`;

const LogoWrapper = styled.div`
  width: 85px;
`;

const BottomRow = styled(Row)`
  justify-content: space-between;
  column-gap: 100px;
  @media ${largeAndUnder} {
    width: calc(100% - 84px);
    margin: 0 auto;
  }
  @media ${tabletAndUnder} {
    width: 100%;
    flex-direction: column;
    column-gap: 32px;
    padding-left: 36px;
    padding-right: 36px;
  }
  @media ${mediumAndUnder} {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;
  max-height: 136px;
  flex-basis: 50%;
`;

const Link = styled.a`
  color: var(--grey-200);
  font: var(--body-sm);
  text-decoration: none;
  &:hover {
    opacity: 0.5;
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
  margin: 0 16px;
  @media ${largeAndUnder} {
    max-width: 640px;
    width: 100%;
    margin: 0;
  }
  @media ${tabletAndUnder} {
    justify-content: center;
    align-items: flex-start;
    align-self: flex-start;
    margin-top: 64px;
  }
  @media ${mediumAndUnder} {
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

const FormTitle = styled.h3`
  font: var(--body-lg);
  color: var(--grey-300);
  max-width: 338px;
  margin-bottom: 32px;
  @media ${largeAndUnder} {
    width: 100%;
    max-width: 640px;
  }
  @media ${tabletAndUnder} {
    width: 100%;
    text-align: left;
  }
  @media ${mediumAndUnder} {
    width: 100%;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 36px;
  }
`;

const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  @media ${largeAndUnder} {
    gap: 16px;
  }
  @media ${tabletAndUnder} {
    padding: 0;
    flex-direction: row;
    max-width: 640px;
    width: 100%;
    margin-bottom: 24px;
  }
  @media ${mediumAndUnder} {
    flex-direction: column;
    width: 100%;
    margin-bottom: 24px;
  }
`;

const Input = styled.input`
  width: 350px;
  height: 48px;
  background: var(--white);
  color: var(--grey-200);
  padding: 8px 16px;
  border-radius: 8px;
  outline: none;
  cursor: initial;
  font: var(--body-md);
  caret-color: var(--grey-100);
  border: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: 2px solid var(--grey-500);
  }
  @media ${largeAndUnder} {
    width: 100%;
    max-width: 525px;
  }
  @media ${mediumAndUnder} {
    width: 100%;
    max-width: calc(100% - 32px);
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px 12px;
  gap: 2px;
  width: 103px;
  height: 48px;
  background: var(--red);
  border-radius: 8px;
  color: var(--grey-800);
  font: var(--body-md);
  transition: opacity ${animationDuration} ease-in-out;
  &:hover {
    opacity: 0.5;
  }
  @media ${largeAndUnder} {
    width: 100%;
    max-width: 103px;
  }
  @media ${mediumAndUnder} {
    width: 100%;
    max-width: calc(100% - 32px);
  }
`;

const LinksFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 75%;
  @media ${largeAndUnder} {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 12px;
  }
`;

const CopyrightRow = styled(Row)`
  margin-top: 365px;
  display: flex;
  justify-content: space-between;
  @media ${largeAndUnder} {
    padding-left: 16px;
    padding-right: 0px;
    width: calc(100% - 48px);
    margin-left: auto;
    margin-right: auto;
  }
  @media ${tabletAndUnder} {
    margin-top: 85px;
    margin-left: 16px;
    margin-right: 0;
  }
  @media ${mediumAndUnder} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  > div {
    font: var(--body-sm);
    color: var(--grey-500);
  }
`;

const StyledLogo = styled(Logo)`
  path {
    fill: var(--red);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  flex-basis: 32%;
  justify-content: flex-end;
  align-items: center;

  @media ${tabletAndUnder} {
    gap: 16px;
    a {
      height: 24px;
      width: 24px;
    }
  }
`;

const SocialLink = styled.a`
  path {
    fill: var(--grey-200);
    transition: fill ${animationDuration} ease-in-out;
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
  margin-top: 16px;
  padding-left: 16px;
`;
