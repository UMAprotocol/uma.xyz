import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  title: string;
  body: ReactNode;
}

const BuilderTabContent: React.FC<Props> = ({ title, body }) => {
  return (
    <Wrapper>
      <TextColumn>
        <Title>{title}</Title>
        <Body>{body}</Body>
        <GreyBlurb>Real contract used by Polymarket:</GreyBlurb>
        <RedBlurb>“Did the temperature on the 25th of July 2022 in Manhattan NY exceed 35c?”</RedBlurb>
      </TextColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
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
  border-bottom: 1px solid var(--grey-150);
`;

const GreyBlurb = styled.div`
  font: var(--body-md);
  color: #b0afb3;
  margin-top: 24px;
`;

const RedBlurb = styled(GreyBlurb)`
  margin-top: 8px;
  color: var(--red-500);
`;
export default BuilderTabContent;
