import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <TopRow>
        <Logo />
      </TopRow>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  background: var(--black);
  width: 100%;
  margin-top: 96px;
  max-width: 1440px;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  gap: 16px;
`;
