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
    fill: var(--grey-900);
  }
  [data-selected] {
    border-bottom: 3px solid var(--red);
    color: var(--red);
    path {
      fill: var(--red);
    }
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
`;

const TabPanels = styled(ReachTabPanels)`
  margin-top: 60px;
`;

const TabPanel = styled(ReachTabPanel)``;

export default Tabs;
