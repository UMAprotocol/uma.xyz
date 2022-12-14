import { SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import { Content, List, Root, Trigger } from "@radix-ui/react-tabs";
import { Divider } from "components";
import { AnimatedLink } from "components/AnimatedLink/AnimatedLink";
import { mobileAndUnder, tabletAndUnder } from "constant";
import Globe from "public/assets/globe.svg";
import Scale from "public/assets/scale.svg";
import Telescope from "public/assets/telescope.svg";
import Tube from "public/assets/tube.svg";
import Wand from "public/assets/wand.svg";
import { useState } from "react";
import styled, { css, CSSProperties, keyframes } from "styled-components";

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const polymarketCode = `pragma solidity ^0.8.14;

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

  const placeholderUsedBy = "xxxxxxxxxxxxxxxxxxxx";

  const placeholderExample =
    "If we could get a real example here it would be cool text text text text text, maybe Sean knows?";

  const placeholderCode = `pragma solidity ^0.8.13;

  // https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v3.0.0/contracts/token/ERC20/IERC20.sol
  interface IERC20 {
      function totalSupply() external view returns (uint);
  
      function balanceOf(address account) external view returns (uint);
  
      function transfer(address recipient, uint amount) external returns (bool);
  
      function allowance(address owner, address spender) external view returns (uint);
  
      function approve(address spender, uint amount) external returns (bool);
  
      function transferFrom(
          address sender,
          address recipient,
          uint amount
      ) external returns (bool);
  
      event Transfer(address indexed from, address indexed to, uint value);
      event Approval(address indexed owner, address indexed spender, uint value);`;

  const tabs = [
    {
      title: "Prediction Markets",
      shortTitle: "Predict",
      content: `The OO can validate natural-language statements and answer questions about real-world events.
      There is a dispute resolution process if something unexpected happens.`,
      usedBy: "Polymarket",
      example: "“Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c?”",
      code: polymarketCode,
      Icon: WandIcon,
    },
    {
      title: "Insurance",
      shortTitle: "Insure",
      content: `The OO can insure any type of outcome whether they are smart contracts or real-world events, while
      defending against exploits with human-powered dispute resolution.`,
      usedBy: placeholderUsedBy,
      example: placeholderExample,
      code: placeholderCode,
      Icon: TubeIcon,
    },
    {
      title: "Cross-Chain Communication",
      shortTitle: "Bridge",
      content: `The OO can verify any statement, including statements about data on other networks.
      Chains can use the OO to “see” things on every other chain.`,
      usedBy: placeholderUsedBy,
      example: placeholderExample,
      code: placeholderCode,
      Icon: TelescopeIcon,
    },
    {
      title: "Governance",
      shortTitle: "Govern",
      content: `DAOs have used KPI Options to motivate community members to work toward shared goals.
      The OO also enables optimistic governance, a new coordination pattern that uses a
      “pass unless disputed” flow.`,
      usedBy: placeholderUsedBy,
      example: placeholderExample,
      code: placeholderCode,
      Icon: ScaleIcon,
    },
    {
      title: "Long-Tail Data",
      shortTitle: "Learn",
      content: `If a piece of information is publicly provable, then UMA's OO can verify it and put it
      on-chain.
      The OO accepts natural language questions as an input, and does not require first
      building pricefeeds.`,
      usedBy: placeholderUsedBy,
      example: placeholderExample,
      code: placeholderCode,
      Icon: GlobeIcon,
    },
  ];

  const codeExamples = tabs.map(({ code }) => code);

  return (
    <TabsRoot defaultValue="0" onValueChange={(value) => setActiveTabIndex(Number(value))}>
      <TabsList>
        {tabs.map(({ title, shortTitle, Icon }, tabIndex) => (
          <TabsTrigger key={title} value={tabIndex.toString()}>
            <TabsTriggerWrapper>
              <Icon />
              <DesktopTabsTriggerTitle>{title}</DesktopTabsTriggerTitle>
              <MobileTabsTriggerTitle>{shortTitle}</MobileTabsTriggerTitle>
            </TabsTriggerWrapper>
          </TabsTrigger>
        ))}
        <ActiveIndicator
          style={
            {
              "--active-tab-index": activeTabIndex,
            } as CSSProperties
          }
        />
      </TabsList>
      {tabs.map(({ content, title, usedBy, example }, tabIndex) => (
        <TabsContent value={tabIndex.toString()} key={title}>
          <TabsContentWrapper>
            <TabsContentTitle>{title}</TabsContentTitle>
            {content.split("\n").map((text, index) => (
              <TabsContentText key={index}>{text}</TabsContentText>
            ))}
            <DividerWrapper>
              <Divider />
            </DividerWrapper>
            <UsedBy>Real contract used by {usedBy}</UsedBy>
            <Example>{example}</Example>
          </TabsContentWrapper>
        </TabsContent>
      ))}
      <SandpackWrapper>
        <SandpackProvider
          options={{
            classes: {
              "sp-layout": "custom-layout",
            },
          }}
          theme={githubLight}
        >
          <SandpackLayout>
            <SandpackCodeViewer code={codeExamples[activeTabIndex]} showLineNumbers wrapContent initMode="lazy" />
          </SandpackLayout>
        </SandpackProvider>
        <RemixLinkWrapper>
          <AnimatedLink href="https://remix.ethereum.org/">Remix code in Sandbox</AnimatedLink>
        </RemixLinkWrapper>
      </SandpackWrapper>
    </TabsRoot>
  );
}

const SandpackWrapper = styled.div`
  grid-area: code;
`;

const RemixLinkWrapper = styled.div`
  margin-top: 20px;
`;

const TabsRoot = styled(Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 56px;
  grid-template-rows: auto auto;
  grid-template-areas:
    "list list"
    "content code";

  @media ${tabletAndUnder} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "list"
      "code"
      "content";
    grid-row-gap: 42px;
  }
`;

const TabsList = styled(List)`
  grid-area: list;
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;
  align-items: center;
  margin-bottom: 56px;
  @media ${tabletAndUnder} {
    margin-bottom: 0;
  }
`;

const ActiveIndicator = styled.div`
  --width: calc(100% / 5);
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3px;
  width: var(--width);
  background: var(--red);
  left: calc(var(--active-tab-index) * var(--width));
  transition: left var(--animation-duration);
`;

const TabsTriggerWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-bottom: 22px;
  gap: 12px;
`;

const DesktopTabsTriggerTitle = styled.h3`
  font: var(--body-md);
  color: var(--color);
  transform: translateY(var(--translate-y));
  transition: color var(--animation-duration), transform var(--animation-duration);
  @media ${tabletAndUnder} {
    display: none;
  }
`;

const MobileTabsTriggerTitle = styled(DesktopTabsTriggerTitle)`
  display: none;
  font: var(--body-xs);
  @media ${tabletAndUnder} {
    display: block;
  }
`;

const TabsTrigger = styled(Trigger)`
  background: transparent;
  transition: opacity var(--animation-duration);
  --color: var(--grey-400);
  --gap: 12px;
  --translate-y: 0;
  &[data-state="active"] {
    --color: var(--red);
    --translate-y: -12px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const TabsContent = styled(Content)`
  grid-area: content;
  background: transparent;
  cursor: unset;
  &[data-state="active"] {
    animation: ${fadeIn} var(--animation-duration);
  }
  &[data-state="inactive"] {
    animation: ${fadeOut} var(--animation-duration);
  }
  transition: opacity var(--animation-duration);
`;

const TabsContentWrapper = styled.div``;

const TabsContentTitle = styled.h2`
  font: var(--header-sm);
  @media ${mobileAndUnder} {
    font: var(--header-xs);
  }
`;

const TabsContentText = styled.p`
  font: var(--body-lg);
  margin-bottom: 12px;
`;

const UsedBy = styled.p`
  font: var(--body-md);
  color: var(--grey-500);
  margin-bottom: 8px;
`;

const Example = styled.p`
  font: var(--body-md);
  color: var(--red);
`;

const iconStyle = css`
  transform: translateY(var(--translate-y));
  path {
    fill: var(--color);
  }
  transition: fill var(--animation-duration), transform var(--animation-duration);
`;

const GlobeIcon = styled(Globe)`
  ${iconStyle}
`;

const TelescopeIcon = styled(Telescope)`
  ${iconStyle}
`;

const TubeIcon = styled(Tube)`
  ${iconStyle}
`;

const WandIcon = styled(Wand)`
  ${iconStyle}
`;

// this one uses stroke instead of fill
const ScaleIcon = styled(Scale)`
  transform: translateY(var(--translate-y));
  path {
    stroke: var(--color);
  }
  transition: stroke var(--animation-duration), transform var(--animation-duration);
`;

const DividerWrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 24px;
`;
