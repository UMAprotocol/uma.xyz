import { useState, ReactNode } from "react";

import {
  Tab as ReachTab,
  TabList as ReachTabList,
  TabPanel as ReachTabPanel,
  TabPanels as ReachTabPanels,
  Tabs as ReachTabs,
} from "@reach/tabs";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <TabsWrapper
      onChange={(index) => {
        setSelectedIndex(index);
      }}
    >
      <TabList selectedIndex={selectedIndex} isIntersecting={isIntersecting}>
        {tabs.map(({ title, Icon }, i) => {
          return (
            <Tab key={title} selected={selectedIndex === i}>
              <Icon />
              <div>{title}</div>
            </Tab>
          );
        })}
      </TabList>
      <BottomBorder selectedIndex={selectedIndex} />
      <TabPanels>
        {tabs.map(({ content, title }) => (
          <TabPanel key={title}>{content}</TabPanel>
        ))}
      </TabPanels>
    </TabsWrapper>
  );
};
const TabsWrapper = styled(ReachTabs)`
  position: relative;
`;

interface ITabList {
  isIntersecting?: boolean;
  selectedIndex: number;
}

const TabList = styled(ReachTabList)<ITabList>`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  background: inherit;
  transition: all 0.4s ease-in-out;
  position: relative;
  top: 0;
  svg {
    transition: all 0.4s ease-in-out;
  }
  path {
    transition: all 0.4s ease-in-out;
    fill: var(--grey-900);
  }
  [data-selected] {
    color: var(--red);
    > div {
      transition: all 0.4s ease-in-out;
    }
    svg {
      margin-top: -8px;
    }
    path {
      transition: all 0.4s ease-in-out;
      fill: var(--red);
    }
  }
  @media ${QUERIES.lg.andDown} {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
  }
  @media ${QUERIES.tb.andDown} {
    width: 1024px;
    height: 112px;
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
    bottom: 0px;
    background: #ffffff;
    padding-top: 16px;
    position: ${(props) => (props.isIntersecting ? "fixed" : "relative")};
    display: ${(props) => (props.isIntersecting ? "inline-flex" : "none")} !important;
  }
`;

const Tab = styled(ReachTab)<{ selected: boolean }>`
  background: transparent;
  padding-inline: 3px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  border-bottom: ${(props) => (props.selected ? "none" : "1px solid var(--grey-600)")};
  font: var(--body-md);
  color: var(--grey-500);
  flex: 1;
  svg {
    height: 34px;
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
  margin: 60px 0px 0;
  @media ${QUERIES.lg.andDown} {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media ${QUERIES.tb.andDown} {
    margin: 96px 0 0;
  }
`;

const TabPanel = styled(ReachTabPanel)``;

const BottomBorder = styled.div<ITabList>`
  position: absolute;
  content: "";
  width: 20%;
  height: 3px;
  background-color: var(--red);
  top: 78px;
  transition: all 0.3s linear;
  left: ${({ selectedIndex }) => {
    return selectedIndex * 20 + "%";
  }};
`;
export default Tabs;
