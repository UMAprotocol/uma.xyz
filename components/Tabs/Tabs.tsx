import {
  Tab as ReachTab,
  TabList as ReachTabList,
  TabPanel as ReachTabPanel,
  TabPanels as ReachTabPanels,
  Tabs as ReachTabs,
} from "@reach/tabs";
import { ReactNode } from "react";
import styled from "styled-components";

type Tab = {
  title: string;
  content: ReactNode;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

interface Props {
  tabs: Tab[];
}

const Tabs = ({ tabs }: Props) => {
  return (
    <TabsWrapper>
      <TabList>
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

const TabList = styled(ReachTabList)`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  background: inherit;
  path {
    fill: hsla(255, 3%, 69%, 1);
  }
  [data-selected] {
    border-bottom: 3px solid var(--red-500);
    color: var(--red-500);
    path {
      fill: var(--red-500);
    }
  }
`;

const Tab = styled(ReachTab)`
  background: transparent;
  color: var(--black);
  font: var(--text-md);
  padding-inline: 3px;
  min-width: 200px;
  padding-bottom: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 22px;
  gap: 12px;
  border-bottom: 2px solid #e9e9e9;
`;

const TabPanels = styled(ReachTabPanels)`
  margin-top: 60px;
`;

const TabPanel = styled(ReachTabPanel)``;

export default Tabs;
