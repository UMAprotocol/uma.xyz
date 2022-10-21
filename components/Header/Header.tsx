import styled from "styled-components";
import Logo from "public/assets/uma-logo.svg";
import { VoteTicker } from "components";
const Header = () => {
  return (
    <>
      <VoteTicker theme="dark" numVotes={2} />
      <Wrapper>
        <a href="/">
          <Logo />
        </a>
        <Links>
          {/* TODO: Get links */}
          {links.map(({ label, href }, i) => (
            <Link key={i} href={href}>
              {label}
            </Link>
          ))}
          <LaunchButton onClick={() => null}>Launch app</LaunchButton>
        </Links>
      </Wrapper>
    </>
  );
};

export default Header;

const links = [
  {
    label: "How it works",
    href: "#",
  },
  {
    label: "For voters",
    href: "#",
  },
  {
    label: "For builders",
    href: "#",
  },
];

const Wrapper = styled.div`
  background: var(--black);
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  max-width: var(--max-section-width);
  padding-top: 24px;
  margin: 0 auto;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 32px;
`;

const Link = styled.a`
  color: var(--grey-900);
  text-decoration: none;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const LaunchButton = styled.button`
  color: var(--black);
  padding: 8px 16px 12px;
  height: 40px;
  gap: 2px;
  width: 118px;
  background-color: var(--white);
  border-radius: 8px;
  font: var(--body-md);
  transition: opacity, background-color 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;
