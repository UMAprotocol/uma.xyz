import { useRef } from "react";
import styled from "styled-components";
import { Title as BaseTitle, Wrapper as DefaultWrapper, Header as BaseHeader } from "components/Widgets";
import { Tabs } from "components";
import BuilderTabContent from "./BuilderTabContent";
import WandIcon from "public/assets/wand.svg";
import TubeIcon from "public/assets/tube.svg";
import TelescopeIcon from "public/assets/telescope.svg";
import ScaleIcon from "public/assets/scale.svg";
import GlobeIcon from "public/assets/globe.svg";
import { QUERIES, BREAKPOINTS } from "constants/breakpoints";
import { useWindowSize, useIntersectionObserver } from "hooks";
import Image from "next/image";

const Builder = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { width } = useBuilder();
  const eSection = useIntersectionObserver(sectionRef, {
    threshold: 0.5,
  });
  const isIntersectingSection = !!eSection?.isIntersecting;
  return (
    <Section id="builder" ref={sectionRef}>
      <Wrapper>
        <Title>
          Participate as a <span>Builder</span>
        </Title>
        {width > BREAKPOINTS.tb ? (
          <>
            <TopHeader>Launch products with</TopHeader>
            <BottomHeader>
              the
              <span>
                <img src="/assets/oo-logo.svg" alt="oo-logo" />
              </span>
              as your backbone
            </BottomHeader>
          </>
        ) : (
          <MobileHeader>Launch products with the OO as your backbone</MobileHeader>
        )}
        <Tabs
          isIntersecting={isIntersectingSection}
          tabs={[
            {
              title: "Prediction Markets",
              content: (
                <BuilderTabContent
                  title="Prediction Markets"
                  body={
                    <>
                      The OO can validate natural-language statements and answer questions about real-world events.
                      <br /> <br /> There is a dispute resolution process if something unexpected happens.
                    </>
                  }
                  greyBlurb="Real contract used by Polymarket:"
                  redBlurb="“Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c?”"
                  code={code}
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
                      The OO can insure any type of outcome whether they are smart contracts or real-world events, while
                      defending against exploits with human-powered dispute resolution.
                    </>
                  }
                  greyBlurb="Real contract used by xxxxxxxxxxxxxx:"
                  redBlurb="“If we could get a real example here it would be cool text text text text text, maybe Sean knows?”"
                  code={code}
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
                      The OO can verify any statement, including statements about data on other networks. <br /> <br />{" "}
                      Chains can use the OO to “see” things on every other chain.
                    </>
                  }
                  greyBlurb="Real contract used by xxxxxxxxxxxxxx:"
                  redBlurb="“If we could get a real example here it would be cool text text text text text, maybe Sean knows?”"
                  code={code}
                />
              ),
              Icon: TelescopeIcon,
            },
            {
              title: "Governance",
              content: (
                <BuilderTabContent
                  title="Governance"
                  body={
                    <>
                      DAOs have used KPI Options to motivate community members to work toward shared goals. <br />{" "}
                      <br /> The OO also enables optimistic governance, a new coordination pattern that uses a “pass
                      unless disputed” flow.
                    </>
                  }
                  greyBlurb="Real contract used by xxxxxxxxxxxxxx:"
                  redBlurb="“If we could get a real example here it would be cool text text text text text, maybe Sean knows?”"
                  code={code}
                />
              ),
              Icon: ScaleIcon,
            },
            {
              title: "Long-Tail data",
              content: (
                <BuilderTabContent
                  title="Long-Tail data"
                  body={
                    <>
                      If a piece of information is publicly provable, then UMA’s OO can verify it and put it on-chain.{" "}
                      <br /> <br /> The OO accepts natural language questions as an input, and does not require first
                      building pricefeeds.
                    </>
                  }
                  greyBlurb="Real contract used by xxxxxxxxxxxxxx:"
                  redBlurb="“If we could get a real example here it would be cool text text text text text, maybe Sean knows?”"
                  code={code}
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

const Title = styled(BaseTitle)`
  @media ${QUERIES.lg.andDown} {
    margin-left: 0;
    margin-right: 0;
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const TopHeader = styled(Header)`
  margin-top: 65px;
  @media ${QUERIES.lg.andDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const BottomHeader = styled(Header)`
  margin-top: 24px;
  margin-bottom: 216px;
  @media ${QUERIES.lg.andDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
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
  font: var(--header-lg);
  span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 6px 8px 0;
    height: 100%;
  }

  @media ${QUERIES.tb.andDown} {
    margin-bottom: 0;
  }

  @media ${QUERIES.sm.andDown} {
    display: inline-block;
    word-break: wrap;
  }
`;

// May add this back in later.
// const MobileImg = styled(Image)`
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0 6px;
// `;

const code = `pragma solidity ^0.8.14;

contract OO_GettingStarted {
  bytes32 identifier = bytes32 ("YES_OR_NO_QUERY");
  bytes ancillaryData =

    bytes("Q: Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c? A:1 for yes. 0 for no.");

  uint256 requestTime = 0;
  function requestPrice() public {
    requestTime = block.timestamp;
    IERC20 bondCurrency = IERC20(0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6);
    uint256 reward = 0;
`;
