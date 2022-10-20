import styled from "styled-components";
const VoteTicker = () => {
  return <Wrapper></Wrapper>;
};

export default VoteTicker;

const Wrapper = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px 8px 8px;
  gap: 16px;
  isolation: isolate;

  position: absolute;
  width: 1144px;
  height: 48px;
  left: 148px;
  top: 16px;

  /* Gray/Gray-200 */

  background: #322f33;
  border-radius: 8px;
`;
