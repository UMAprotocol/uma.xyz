import { githubLight } from "@codesandbox/sandpack-themes";
import { Divider } from "components/Divider";
import { mobileAndUnder, tabletAndUnder } from "constant";
import dynamic from "next/dynamic";
import Globe from "public/assets/globe.svg";
import Scale from "public/assets/scale.svg";
import Telescope from "public/assets/telescope.svg";
import Tube from "public/assets/tube.svg";
import Wand from "public/assets/wand.svg";
import { useState } from "react";
import styled, { css, CSSProperties, keyframes } from "styled-components";

const Content = dynamic(() => import("@radix-ui/react-tabs").then((mod) => mod.Content));
const List = dynamic(() => import("@radix-ui/react-tabs").then((mod) => mod.List));
const Root = dynamic(() => import("@radix-ui/react-tabs").then((mod) => mod.Root));
const Trigger = dynamic(() => import("@radix-ui/react-tabs").then((mod) => mod.Trigger));
const AnimatedLink = dynamic(() => import("components/AnimatedLink"));
const SandpackCodeViewer = dynamic(() => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackCodeViewer));
const SandpackLayout = dynamic(() => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackLayout));
const SandpackProvider = dynamic(() => import("@codesandbox/sandpack-react").then((mod) => mod.SandpackProvider));

export default function Tabs() {
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
      title: "oSnap",
      shortTitle: "Govern",
      content: `The OO also enables optimistic governance, a new coordination pattern that uses a
      “pass unless disputed” flow.`,
      usedBy: "oSnap",
      example: "Does this on-chain transaction match an approved Snapshot vote?",
      code: placeholderCode,
      Icon: ScaleIcon,
    },
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
      usedBy: "Sherlock",
      example: "Is this insurance claim about a smart contract hack valid?",
      code: placeholderCode,
      Icon: TubeIcon,
    },
    {
      title: "Cross-Chain Communication",
      shortTitle: "Bridge",
      content: `The OO can verify any statement, including statements about data on other networks.
      The OO can be used in this way for cross chain messaging. It is used by the bridge Across Protocol today to enable cross-chain asset bridging.`,
      usedBy: "Across",
      example: "Did this deposit event on a different chain happen?",
      code: placeholderCode,
      Icon: TelescopeIcon,
    },
    {
      title: "Real World Assets",
      shortTitle: "RWA",
      content: `UMA's OO can be used If a piece of information is publicly provable, then UMA's OO can verify it and put it
      on-chain.`,
      usedBy: "Jarvis",
      example: "What is the EUR/USD exchange rate?",
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
            <UsedBy>Real question used by {usedBy}</UsedBy>
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
            <SandpackCodeViewer
              code={codeExamples[activeTabIndex]}
              showLineNumbers
              wrapContent
              initMode="user-visible"
            />
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
  margin-top: 26px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${tabletAndUnder} {
    justify-content: start;
  }
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
  border-bottom: 1px solid var(--grey-600);
  @media ${tabletAndUnder} {
    margin-bottom: 0;
  }
`;

const ActiveIndicator = styled.div`
  --width: calc(100% / 5);
  position: absolute;
  bottom: -1px;
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
  font: var(--body-md);
  @media ${tabletAndUnder} {
    display: block;
  }
  @media ${mobileAndUnder} {
    font: var(--body-xs);
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
