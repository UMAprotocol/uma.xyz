import styled from "styled-components";
import { ReactNode } from "react";
import { SandpackProvider, SandpackLayout, SandpackCodeViewer } from "@codesandbox/sandpack-react";
import { githubLight } from "@codesandbox/sandpack-themes";
import UpRightArrowRed from "public/assets/up-right-arrow-red.svg";
import { QUERIES } from "constants/breakpoints";

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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 112px;
  @media ${QUERIES.tb.andDown} {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font: var(--header-sm);
  margin-bottom: 16px;
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
  margin-top: 8px;
  @media ${QUERIES.tb.andDown} {
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
`;

const RemixLink = styled.a`
  font: var(--body-lg);
  text-decoration: none;
  div {
    margin-left: 12px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 1px solid var(--red);
    border-radius: 8px;
  }
  &:visited {
    color: var(--red);
  }
  &:hover {
    color: var(--grey-100);
    div {
      border-color: var(--grey-100);
      path {
        stroke: var(--grey-100);
      }
    }
  }
`;
export default BuilderTabContent;
