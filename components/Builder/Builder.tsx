import styled from "styled-components";
import { Title, Wrapper as DefaultWrapper, Header as BaseHeader } from "components/Widgets";
import OOLogo from "public/assets/oo-logo.svg";
import { Tabs } from "components";
import WandIcon from "public/assets/wand.svg";
import TubeIcon from "public/assets/tube.svg";
console.log("wandIcon", WandIcon);
const Builder = () => {
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as a <span>Builder</span>
        </Title>
        <TopHeader>Launch products with</TopHeader>
        <BottomHeader>
          the{" "}
          <span>
            <OOLogo />
          </span>
          as your backbone
        </BottomHeader>
        <Tabs
          tabs={[
            {
              title: "Prediction markets",
              content: <div>Prediction markets</div>,
              Icon: WandIcon,
            },
            {
              title: "Launch",
              content: <div>Launch</div>,
              Icon: TubeIcon,
            },
          ]}
        ></Tabs>
      </Wrapper>
    </Section>
  );
};

export default Builder;

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;

const Wrapper = styled(DefaultWrapper)`
  padding: 100px 0 113px;
`;

const Header = styled(BaseHeader)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;
`;

const TopHeader = styled(Header)`
  margin-top: 65px;
`;

const BottomHeader = styled(Header)`
  margin-top: 24px;
  margin-bottom: 216px;
  span {
    margin: 20px 12px 0;
    display: flex;
    align-items: center;
  }
`;
