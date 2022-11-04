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
import Image from "next/image";

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
              <MobileImg width="45px" height="20px" objectFit="contain" src="/assets/oo-mobile-red.svg" alt="oo-logo" />
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
                      Prediction Markets: The OO can validate natural-language statements and answer questions about
                      real-world events. <br /> <br /> There is a dispute resolution process if something unexpected
                      happens.
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
                      Insurance: The OO empowers and secures risk management platforms that provide permission-less,
                      trustworthy coverage against smart contract exploits.
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
                      Cross-chain Communication: The OO can verify any statement, including statements about data on
                      other networks. <br /> <br /> Chains can use the OO to “see” things on every other chain.
                    </>
                  }
                />
              ),
              Icon: MedalIcon,
            },
            {
              title: "Governance",
              content: (
                <BuilderTabContent
                  title="Governance"
                  body={
                    <>
                      Governance: DAOs have used KPI Options to motivate community members to work toward shared goals.{" "}
                      <br /> <br /> The OO also enables optimistic governance, a new coordination pattern that uses a
                      “pass unless disputed” flow.
                    </>
                  }
                />
              ),
              Icon: CreditCardsIcon,
            },
            {
              title: "Long-Tail data",
              content: (
                <BuilderTabContent
                  title="Long-Tail data"
                  body={
                    <>
                      Long-Tail Data: If a piece of information is publicly provable, then UMA’s OO can verify it and
                      put it on-chain. <br /> <br /> The OO accepts natural language questions as an input, and does not
                      require first building pricefeeds.
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
  margin: 24px 0 40px;
  padding-left: 16px;
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 6px 8px 0;
    height: 100%;
  }
  @media ${QUERIES.sm.andDown} {
    display: inline-block;
    word-break: wrap;
  }
`;

const MobileImg = styled(Image)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px;
`;
