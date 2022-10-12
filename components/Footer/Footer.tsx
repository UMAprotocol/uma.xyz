import { useState } from "react";
import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import Twitter from "public/assets/twitter.svg";
import Discord from "public/assets/discord.svg";

const Footer = () => {
  const { value, setValue } = useFooter();
  return (
    <Wrapper>
      <Row>
        <Logo />
      </Row>
      <BottomRow>
        <FooterLinks>
          <SocialLinks>
            {socialLinks.map(({ href, Icon }, i) => (
              <SocialLinkWrapper key={i}>
                <SocialLink href={href} rel="noreferrer" target="_blank">
                  <Icon />
                </SocialLink>
              </SocialLinkWrapper>
            ))}
          </SocialLinks>
          <LinksFlex>
            <Links>
              {middleLinks.map(({ label, href }, i) => (
                <Link key={i} href={href} target="_blank" rel="noreferrer">
                  {label}
                </Link>
              ))}
            </Links>
            <Links>
              {rightLinks.map(({ label, href }, i) => (
                <Link key={i} href={href} target="_blank" rel="noreferrer">
                  {label}
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
    </Wrapper>
  );
};

export default Footer;

function useFooter() {
  const [value, setValue] = useState("");
  return { value, setValue };
}

const socialLinks = [
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: Twitter,
  },
  {
    href: "http://discord.umaproject.org",
    Icon: Discord,
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: Twitter,
  },
  {
    href: "http://discord.umaproject.org",
    Icon: Discord,
  },
  {
    href: "https://twitter.com/UMAprotocol",
    Icon: Twitter,
  },
  {
    href: "http://discord.umaproject.org",
    Icon: Discord,
  },
];

const middleLinks = [
  {
    label: "Oracle",
    href: "https://optimistic-oracle-dapp.vercel.app/",
  },
  {
    label: "Projects",
    href: "https://umaproject.org/projects",
  },

  {
    label: "Docs",
    href: "https://docs.umaproject.org/",
  },
  {
    label: "Media kit",
    href: "https://medium.com/uma-project",
  },
];

const rightLinks = [
  {
    label: "Risk Labs",
    href: "#",
  },
  {
    label: "Across",
    href: "https://across.to/",
  },
  {
    label: "Outcome Finance",
    href: "https://outcome.finance/",
  },
];

const Wrapper = styled.div`
  background: var(--black);
  width: 100%;
  max-width: 1144px;
  margin: 96px auto 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  gap: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 52%;
  gap: 32px;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  flex-basis: 32%;
`;

const SocialLinkWrapper = styled.div`
  width: 22px;
`;
const SocialLink = styled.a`
  width: 22px;
  &:hover {
    path {
      fill: var(--white);
    }
  }
`;

const BottomRow = styled(Row)`
  margin-top: 110px;
  justify-content: space-between;
  column-gap: 100px;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 16px;
  max-height: 136px;
  flex-basis: 50%;
`;

const Link = styled.a`
  color: var(--grey-950);
  font: var(--text-md);
  text-decoration: none;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: baseline;
`;

const FormTitle = styled.h3`
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 135%;
  color: var(--white);
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
  background: rgba(255, 255, 255, 0.05);
  color: var(--white);
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
  padding: 8px 16px;
  border-radius: 8px;
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

  background: #ff4a4a;
  border-radius: 8px;
  color: var(--black);

  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 135%;
`;

const LinksFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-basis: 75%;
`;
