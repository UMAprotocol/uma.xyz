import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
const Header = () => {
  return (
    <Wrapper>
      <Logo />
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
  margin: 0 auto;
`;
