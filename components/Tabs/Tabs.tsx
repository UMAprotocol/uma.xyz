import {
  Tab as ReachTab,
  TabList as ReachTabList,
  TabPanel as ReachTabPanel,
  TabPanels as ReachTabPanels,
  Tabs as ReachTabs,
} from "@reach/tabs";
import { ReactNode } from "react";
import styled from "styled-components";
import { QUERIES } from "constants/breakpoints";

type Tab = {
  title: string;
  content: ReactNode;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

interface Props {
  tabs: Tab[];
  isIntersecting?: boolean;
}

const Tabs = ({ tabs, isIntersecting }: Props) => {
  return (
    <TabsWrapper>
      <TabList isIntersecting={isIntersecting}>
        {tabs.map(({ title, Icon }) => {
          return (
            <Tab key={title}>
              <Icon />
              <div>{title}</div>
            </Tab>
          );
        })}
      </TabList>
      <TabPanels>
        {tabs.map(({ content, title }) => (
          <TabPanel key={title}>{content}</TabPanel>
        ))}
      </TabPanels>
    </TabsWrapper>
  );
};
const TabsWrapper = styled(ReachTabs)``;

interface ITabList {
  isIntersecting?: boolean;
}

const TabList = styled(ReachTabList)<ITabList>`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  background: inherit;
  path {
    fill: var(--grey-900);
  }
  [data-selected] {
    border-bottom: 2px solid var(--red);
    color: var(--red);
    path {
      fill: var(--red);
    }
  }
  @media ${QUERIES.tb.andDown} {
    width: 1024px;
    height: 100px;
    white-space: nowrap;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    max-width: 100%;
    overflow-x: scroll;
    [data-selected] {
      border-bottom: none;
      color: var(--red);
      path {
        fill: var(--red);
      }
    }
    z-index: 10000;
    bottom: 6px;
    background: #ffffff;
    padding-top: 16px;
    position: ${(props) => (props.isIntersecting ? "fixed" : "relative")};
    display: ${(props) => (props.isIntersecting ? "inline-flex !important" : "none !important")};
  }
`;

const Tab = styled(ReachTab)`
  background: transparent;
  padding-inline: 3px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-bottom: 2px solid var(--grey-600);
  font: var(--body-md);
  color: var(--grey-500);
  flex: 1;
  svg {
    height: 34px;
  }
  &:hover {
    opacity: 0.5;
  }
  @media ${QUERIES.lg.andDown} {
    font: var(--body-sm);
    border-bottom: none;
  }
  @media ${QUERIES.md.andDown} {
    padding-inline: 12px;
  }
`;

const TabPanels = styled(ReachTabPanels)`
  margin: 60px 12px 0;
`;

const TabPanel = styled(ReachTabPanel)``;

export default Tabs;
