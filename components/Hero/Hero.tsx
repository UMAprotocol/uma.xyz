import styled from "styled-components";
import OOLogo from "public/assets/oo-logo.svg";
const Hero = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          A decentralized <br /> truth{" "}
          <span>
            <OOLogo />
          </span>{" "}
          machine
        </Title>
        <Subheader>
          The Optimistic Oracle (OO) provides decentralized truth in a world where people <br /> have to rely on
          questionable third-parties for centralized truth.
        </Subheader>
      </Wrapper>
    </Section>
  );
};

export default Hero;

const Section = styled.div`
  background: var(--black);
  width: 100%;
`;
const Wrapper = styled.div`
  background: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-section-width);
  margin-top: 153px;
  margin: 153px auto 0;
`;

const Title = styled.div`
  font: var(--text-xxxl);
  color: var(--white);
  span {
    display: inline-flex;
    align-items: center;
  }
`;

const Subheader = styled.div`
  margin-top: 32px;
  font: var(--text-md-20);
  color: var(--grey-910);
  text-align: center;
`;
