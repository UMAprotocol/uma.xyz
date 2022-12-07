import { SandpackCodeViewer, SandpackLayout, SandpackProvider } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import { mobileAndUnder, tabletAndUnder } from "constant";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

interface Props {
  title: string;
  body: ReactNode;
  greyBlurb: string;
  redBlurb: string;
  code: string;
}

const BuilderTabContent: React.FC<Props> = ({ title, body, greyBlurb, redBlurb, code }) => {
  return (
    <Wrapper>
      <TextColumn>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <GreyBlurb>{greyBlurb}</GreyBlurb>
        <RedBlurb>{redBlurb}</RedBlurb>
      </TextColumn>
      <CodeColumn>
        <SandpackProvider
          options={{
            classes: {
              "sp-layout": "custom-layout",
            },
          }}
          theme={githubLight}
        >
          <SandpackLayout>
            <SandpackCodeViewer code={code} showLineNumbers showTabs />
          </SandpackLayout>
        </SandpackProvider>
        <RemixRow>
          <RemixLink href="https://remix.ethereum.org/" target="_blank" rel="noreferrer">
            Remix code in Sandbox
            <div>
              <UpRightArrowRed />
            </div>
          </RemixLink>
        </RemixRow>
      </CodeColumn>
    </Wrapper>
  );
};

const translate = keyframes`
  0% {  transform: translateY(-20px); opacity: .2; };
  100% { transform: translateY(0px); opacity: 1; };
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 112px;
  @media ${tabletAndUnder} {
    flex-direction: column-reverse;
    gap: 40px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${mobileAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const Title = styled.h2`
  font: var(--header-sm);
  margin-bottom: 16px;
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${translate} 0.4s ease-in-out;
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
  margin-top: 8px;
  @media ${tabletAndUnder} {
    max-width: 100%;
    margin-left: 0;
  }
`;

const RemixRow = styled.div`
  color: var(--red);
  font: var(--body-lg);
  display: inline-block;
  margin-top: 24px;
  display: flex;
  font: var(--body-lg);
  color: var(--red);
  justify-content: center;
  gap: 20px;
  @media ${tabletAndUnder} {
    justify-content: flex-start;
  }
`;

const RemixLink = styled.a`
  font: var(--body-lg);
  color: var(--red);
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;
  text-decoration: none;
  width: 300px;
  div {
    position: relative;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--red);
    border-radius: 8px;
    transition: margin 0.3s ease, border-color 0.3s ease;
  }
  &:visited {
    color: var(--red);
  }
  &:hover {
    color: var(--grey-100);
    div {
      border-color: var(--grey-100);
      background-color: var(--grey-100);
      margin-left: -4px;

      path {
        stroke: var(--white);
      }
    }
  }
`;
export default BuilderTabContent;
