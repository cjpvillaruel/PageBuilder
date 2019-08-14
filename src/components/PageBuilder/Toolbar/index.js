import React from 'react';
import { Tabs } from 'antd';
import ComponentsTab from './ComponentsTab';
import PageListTab from './PageListTab';

const { TabPane } = Tabs;

const Toolbar = ({ addComponent }) => {

  return (
    <Tabs>
      <TabPane tab="Insert" key="components-tab">
        <ComponentsTab addComponent={addComponent}/>
      </TabPane>
      <TabPane tab="Pages" key="pages-tab">
        <PageListTab />
      </TabPane>
    </Tabs>
  )
};

export default Toolbar;