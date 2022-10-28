import styled from "styled-components";
import { Title, Wrapper as DefaultWrapper, Header as BaseHeader } from "components/Widgets";
import { Tabs } from "components";
import BuilderTabContent from "./BuilderTabContent";
import WandIcon from "public/assets/wand.svg";
import TubeIcon from "public/assets/tube.svg";
import MedalIcon from "public/assets/medal.svg";
import CreditCardsIcon from "public/assets/credit-cards.svg";
import GlobeIcon from "public/assets/globe.svg";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize } from "hooks";

const Builder = () => {
  const { width } = useBuilder();
  return (
    <Section>
      <Wrapper>
        <Title>
          Participate as a <span>Builder</span>
        </Title>
        {width > BREAKPOINTS.tb ? (
          <>
            <TopHeader>Launch products with</TopHeader>
            <BottomHeader>
              the{" "}
              <span>
                <img src="/assets/oo-logo.svg" alt="oo-logo" />
              </span>
              as your backbone
            </BottomHeader>
          </>
        ) : (
          <MobileHeader>
            Launch products with the
            <span>
              <MobileImg src="/assets/oo-mobile-red.svg" alt="oo-logo" />
            </span>
            as your backbone
          </MobileHeader>
        )}
        <Tabs
          tabs={[
            {
              title: "Prediction markets",
              content: (
                <BuilderTabContent
                  title="Prediction markets"
                  body={
                    <>
                      Prediction markets are based on the same lorem ipsum text that has been used for years in the web
                      design industry. <br /> <br />
                      The text should probably take up this amount of space, i.e. not be too long or too short and map
                      well to the code.
                    </>
                  }
                />
              ),
              Icon: WandIcon,
            },
            {
              title: "Insurance",
              content: (
                <BuilderTabContent
                  title="Insurance"
                  body={
                    <>
                      Insurance is based on the same lorem ipsum text that has been used for years in the web design
                      industry. <br /> <br />
                      The text should probably take up this amount of space, i.e. not be too long or too short and map
                      well to the code.
                    </>
                  }
                />
              ),
              Icon: TubeIcon,
            },
            {
              title: "Cross-Chain Communication",
              content: (
                <BuilderTabContent
                  title="Cross-Chain Communication"
                  body={
                    <>
                      Cross-Chain Communication are based on the same lorem ipsum text that has been used for years in
                      the web design industry. <br /> <br />
                      The text should probably take up this amount of space, i.e. not be too long or too short and map
                      well to the code.
                    </>
                  }
                />
              ),
              Icon: MedalIcon,
            },
            {
              title: "Off-chain Governance",
              content: (
                <BuilderTabContent
                  title="Off-chain Governance"
                  body={
                    <>
                      Off-chain Governance is based on the same lorem ipsum text that has been used for years in the web
                      design industry. <br /> <br />
                      The text should probably take up this amount of space, i.e. not be too long or too short and map
                      well to the code.
                    </>
                  }
                />
              ),
              Icon: CreditCardsIcon,
            },
            {
              title: "Long-tail data",
              content: (
                <BuilderTabContent
                  title="Long-tail data"
                  body={
                    <>
                      Long-tail data are based on the same lorem ipsum text that has been used for years in the web
                      design industry. <br /> <br />
                      The text should probably take up this amount of space, i.e. not be too long or too short and map
                      well to the code.
                    </>
                  }
                />
              ),
              Icon: GlobeIcon,
            },
          ]}
        ></Tabs>
      </Wrapper>
    </Section>
  );
};

export default Builder;

function useBuilder() {
  const { width } = useWindowSize();
  return { width };
}

const Section = styled.section`
  width: 100%;
  background: var(--white);
`;

const Wrapper = styled(DefaultWrapper)`
  padding: 100px 0 113px;
  @media ${QUERIES.tb.andDown} {
    max-width: 100%;
    padding-bottom: 40px;
  }
`;

const Header = styled(BaseHeader)`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: center;

  @media ${QUERIES.tb.andDown} {
    font: var(--header-sm);
  }
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
    @media ${QUERIES.tb.andDown} {
      margin: 0 6px;
    }
  }
  img {
    @media ${QUERIES.tb.andDown} {
      font: var(--header-md);
    }
  }
`;

const MobileHeader = styled(Header)`
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
  margin: 24px 12px 40px;
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 6px 4px 0;
    height: 100%;
  }
`;

const MobileImg = styled.img`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
`;
