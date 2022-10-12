import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import Twitter from "public/assets/twitter.svg";
import Discord from "public/assets/discord.svg";
const Footer = () => {
  return (
    <Wrapper>
      <Row>
        <Logo />
      </Row>
      <BottomRow>
        <FooterLinks>
          <SocialLinks>
            {socialLinks.map(({ href, Icon }, i) => (
              <SocialLink key={i} href={href} rel="noreferrer" target="_blank">
                <Icon />
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterLinks>
      </BottomRow>
    </Wrapper>
  );
};

export default Footer;

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

const Wrapper = styled.div`
  background: var(--black);
  width: 100%;
  max-width: 1440px;
  margin: 96px auto 0;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 0px;
  gap: 16px;
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const SocialLink = styled.a`
  &:hover {
    path {
      fill: var(--white);
    }
  }
`;

const BottomRow = styled(Row)`
  margin-top: 110px;
`;
