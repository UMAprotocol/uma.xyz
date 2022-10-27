import styled from "styled-components";
import { ReactNode } from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeViewer } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
interface Props {
  title: string;
  body: ReactNode;
}

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
const BuilderTabContent: React.FC<Props> = ({ title, body }) => {
  return (
    <Wrapper>
      <TextColumn>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <GreyBlurb>Real contract used by Polymarket:</GreyBlurb>
        <RedBlurb>“Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c?”</RedBlurb>
      </TextColumn>
      <CodeColumn>
        <SandpackProvider theme={githubLight}>
          <SandpackLayout>
            <SandpackCodeViewer code={code} showLineNumbers showTabs />
          </SandpackLayout>
        </SandpackProvider>
        <RemixWrapper>
          <span>Remix code in Sandbox</span>
          <RemixLink href="https://remix-project.org/" target="_blank" rel="noreferrer">
            <UpRightArrowRed />
          </RemixLink>
        </RemixWrapper>
      </CodeColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 100px;
`;

const Title = styled.h2`
  font: var(--header-sm);
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  font: var(--body-lg);
  padding-bottom: 48px;
  border-bottom: 1px solid var(--grey-600);
`;

const GreyBlurb = styled.div`
  font: var(--body-md);
  color: #b0afb3;
  margin-top: 24px;
`;

const RedBlurb = styled(GreyBlurb)`
  margin-top: 8px;
  color: var(--red);
`;

const CodeColumn = styled.div`
  display: flex;
  max-width: 50%;
  margin-left: auto;
  flex-direction: column;
`;

const RemixWrapper = styled.div`
  margin-top: 26px;
  display: flex;
  font: var(--body-lg);
  color: var(--red);
  justify-content: center;
  gap: 20px;
  cursor: default;
  &:hover {
    span {
      color: var(--grey-100);
    }
    a {
      border-color: var(--grey-100);
      path {
        stroke: var(--grey-100);
      }
    }
  }
`;
const RemixLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 8px;
  border: 1px solid var(--red);
  border-radius: 8px;
`;
export default BuilderTabContent;
