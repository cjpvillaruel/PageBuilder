import React from 'react';
import { Tabs } from 'antd';
import ComponentsTab from './ComponentsTab';
import PageListTab from './PageListTab';

const { TabPane } = Tabs;

const Toolbar = () => {

  return (
    <Tabs >
      <TabPane tab="Insert" key="components-tab">
        <ComponentsTab />
      </TabPane>
      <TabPane tab="Pages" key="pages-tab">
        <PageListTab />
      </TabPane>
    </Tabs>
  )
};

export default Toolbar;