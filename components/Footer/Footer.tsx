import { useState } from "react";
import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import Twitter from "public/assets/twitter.svg";
import Discord from "public/assets/discord.svg";
import Github from "public/assets/github.svg";
import Discourse from "public/assets/discourse.svg";
import BlackCircle from "public/assets/black-circle.svg";
import UpRightArrowBlack from "public/assets/up-right-arrow-black.svg";
import { VoteTicker } from "components";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";

const Footer = () => {
  const { value, setValue, width } = useFooter();
  return (
    <>
      <VoteTicker theme="light" numVotes={2} phase="Commit" />
      <Section>
        <Wrapper>
          <BottomRow>
            <FooterLinks>
              {width > BREAKPOINTS.tb ? (
                <LogoWrapper>
                  <StyledLogo />
                </LogoWrapper>
              ) : null}
              <LinksFlex>
                <Links>
                  {middleLinks.map(({ label, href }, i) => (
                    <Link key={i} href={href} target="_blank" rel="noreferrer">
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
              {width <= BREAKPOINTS.tb ? (
                <LogoWrapper>
                  <StyledLogo />
                </LogoWrapper>
              ) : null}
              <FormTitle>Receive the latest UMA and OO news, straight to your inbox.</FormTitle>
              <Form>
                <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="jane@doe.com"></Input>
                <Button onClick={() => null}>Sign up</Button>
              </Form>
            </FormWrapper>
          </BottomRow>
          <CopyrightRow>
            <AddressWrapper>
              <div>© 2022 Risk Labs</div>
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
    href: "#",
  },
  {
    label: "For Voters",
    href: "https://medium.com/uma-project",
  },
  {
    label: "For Builders",
    href: "https://medium.com/uma-project",
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
    href: "https://umaproject.org/projects",
    Logo: UpRightArrowBlack,
  },
];

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
  @media ${QUERIES.tb.andDown} {
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
  gap: 100px;
  @media ${QUERIES.tb.andDown} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;

const LogoWrapper = styled.div`
  width: 85px;
  @media ${QUERIES.tb.andDown} {
    margin-bottom: 24px;
  }
`;

const BottomRow = styled(Row)`
  justify-content: space-between;
  column-gap: 100px;
  @media ${QUERIES.tb.andDown} {
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
  flex-basis: 45%;
  @media ${QUERIES.tb.andDown} {
    margin-top: 16px;
  }
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
  @media ${QUERIES.tb.andDown} {
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const FormTitle = styled.h3`
  font: var(--body-lg);
  color: var(--grey-300);
  max-width: 338px;
  margin-bottom: 32px;
  @media ${QUERIES.tb.andDown} {
    max-width: 428px;
    width: 100%;
    text-align: center;
  }
`;

const Form = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  @media ${QUERIES.tb.andDown} {
    flex-direction: column;
    max-width: 428px;
    width: 100%;
    @media ${QUERIES.tb.andDown} {
      margin-bottom: 24px;
    }
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
  &:hover {
    border: 2px solid var(--grey-500);
  }
  @media ${QUERIES.tb.andDown} {
    max-width: 428px;
    width: 100%;
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
  &:hover {
    opacity: 0.5;
  }
  @media ${QUERIES.tb.andDown} {
    max-width: 428px;
    width: 100%;
  }
`;

const LinksFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 75%;
  @media ${QUERIES.tb.andDown} {
    flex-direction: column;
  }
`;

const CopyrightRow = styled(Row)`
  margin-top: 365px;
  display: flex;
  justify-content: space-between;
  @media ${QUERIES.tb.andDown} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    margin-top: 85px;
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
  gap: 22px;
  flex-basis: 32%;
  justify-content: flex-end;
  align-items: center;
`;

const SocialLink = styled.a`
  path {
    fill: var(--grey-200);
  }
  &:hover {
    opacity: 0.5;
  }
`;
