import { ReactNode, useState } from "react";

import {
  Tab as ReachTab,
  TabList as ReachTabList,
  TabPanel as ReachTabPanel,
  TabPanels as ReachTabPanels,
  Tabs as ReachTabs,
} from "@reach/tabs";
import { laptopAndUnder, mobileAndUnder, tabletAndUnder } from "constant/breakpoints";
import styled from "styled-components";

type Tab = {
  title: string;
  content: ReactNode;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

interface Props {
  tabs: Tab[];
  isIntersecting?: boolean;
}

export function Tabs({ tabs, isIntersecting }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <TabsWrapper
      onChange={(index) => {
        setSelectedIndex(index);
      }}
    >
      <TabList scrollable-force-tab selectedIndex={selectedIndex} isIntersecting={isIntersecting}>
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
}
const TabsWrapper = styled(ReachTabs)`
  position: relative;
  width: 100%;
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
  path {
    fill: var(--grey-900);
  }
  [data-selected] {
    color: var(--red);
    &:hover {
      color: var(--red);
    }
    > div {
      transition: all 0.4s ease-in-out;
    }
    svg {
      margin-top: -8px;
      @media ${tabletAndUnder} {
        margin-top: 0;
      }
    }
    path {
      transition: all 0.4s ease-in-out;
      fill: var(--red);
    }
  }
  [data-reach-tab-panels] {
    overflow-x: scroll;
  }
  @media ${laptopAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
  }
  @media ${tabletAndUnder} {
    width: 100%;
    overflow-x: scroll;
    height: 112px;
    white-space: nowrap;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    [data-selected] {
      border-bottom: 3px solid var(--red);
      color: var(--red);
      path {
        fill: var(--red);
      }
    }
    z-index: 10000;
    bottom: 0px;
    background: #ffffff;
    padding-top: 16px;
    position: static;
  }
  @media ${mobileAndUnder} {
    [data-selected] {
      border-bottom: none;
    }
    margin-top: auto;
    position: ${(props) => (props.isIntersecting ? "fixed" : "relative")};
    display: ${(props) => (props.isIntersecting ? "inline-flex" : "none")};
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
  &:hover {
    color: var(--grey-400);
    path[aria-selected="false"] {
      fill: var(--grey-400);
    }
  }
  @media ${laptopAndUnder} {
    font: var(--body-sm);
  }
  @media ${tabletAndUnder} {
  }
  @media ${mobileAndUnder} {
    padding-inline: 12px;
    border-bottom: none;
  }
`;

const TabPanels = styled(ReachTabPanels)`
  margin: 60px 0px 0;
  @media ${laptopAndUnder} {
    padding-left: 16px;
    padding-right: 16px;
  }
  @media ${tabletAndUnder} {
    margin: 96px 0 0;
  }
`;

const TabPanel = styled(ReachTabPanel)`
  cursor: default;
  transition: all 0.2 linear;
`;

const BottomBorder = styled.div<ITabList>`
  position: absolute;
  content: "";
  width: 20%;
  height: 3px;
  background-color: var(--red);
  top: 78px;
  transition: all 0.3s linear;
  left: ${({ selectedIndex }) => {
    return `${selectedIndex * 20}%`;
  }};
  @media ${tabletAndUnder} {
    display: none;
    top: 108px;
  }
  @media ${mobileAndUnder} {
  }
`;
