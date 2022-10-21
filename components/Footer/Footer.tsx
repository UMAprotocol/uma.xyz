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
const Footer = () => {
  const { value, setValue } = useFooter();
  return (
    <>
      <VoteTicker theme="light" numVotes={2} />

      <Section>
        <Wrapper>
          <BottomRow>
            <FooterLinks>
              <LogoWrapper>
                <StyledLogo />
              </LogoWrapper>
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
  return { value, setValue };
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
  background: var(--grey-100);
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
`;

const LogoWrapper = styled.div`
  width: 85px;
`;

const BottomRow = styled(Row)`
  justify-content: space-between;
  column-gap: 100px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 16px;
  max-height: 136px;
  flex-basis: 45%;
`;

const Link = styled.a`
  color: var(--black);
  font: var(--body-sm);
  text-decoration: none;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
`;

const FormTitle = styled.h3`
  font: var(--body-lg);
  color: var(--black-100);
  max-width: 338px;
  margin-bottom: 32px;
`;

const Form = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

const Input = styled.input`
  width: 350px;
  height: 48px;
  background: var(--white);
  color: var(--black);
  padding: 8px 16px;
  border-radius: 8px;
  outline: none;
  cursor: initial;
  font: var(--body-md);
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
  background: var(--red-500);
  border-radius: 8px;
  color: var(--black);
  font: var(--body-md);
`;

const LinksFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 75%;
`;

const CopyrightRow = styled(Row)`
  margin-top: 365px;
  display: flex;
  justify-content: space-between;
`;

const AddressWrapper = styled.div`
  display: flex;
  > div {
    font: var(--body-sm);
    color: var(--grey-910);
  }
`;

const StyledLogo = styled(Logo)`
  path {
    fill: var(--red-500);
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
    fill: var(--black);
  }
  &:hover {
    opacity: 0.8;
  }
`;
