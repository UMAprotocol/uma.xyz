import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import { Button } from "components";
const Header = () => {
  return (
    <Wrapper>
      <Logo />
      <Links>
        <Link href="#">How it works</Link>
        <Link href="#">For voters</Link>
        <Link href="#">For builders</Link>
        <LaunchButton onClick={() => null}>Launch app</LaunchButton>
      </Links>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  background: #272528;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  max-width: 1440px;
  padding-top: 16px;
  margin: 0 auto;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

const Link = styled.a`
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #b0afb3;
  text-decoration: none;
`;

const LaunchButton = styled.button`
  color: #272528;
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  font-family: "Halyard Display";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  width: 118px;
  background-color: #fff;
  border-radius: 8px;
`;
