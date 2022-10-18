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

export default BuilderTabContent;
