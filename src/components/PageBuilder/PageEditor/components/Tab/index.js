import React, { useState } from 'react';
import { Tabs } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
const { TabPane } = Tabs;

// todo: Make this editable

const Tab = ({text, isEditMode, value}) => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane tab="Tab 1" key="1">
        {/* add component button for each tab */}
       <Editor />
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        <Editor />
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <Editor />
      </TabPane>
  </Tabs>
  )
}


const Editor = () => (
  <CKEditor
      editor={ InlineEditor }
      data=""
      onInit={ editor => {
          // You can store the "editor" and use when it is needed.
      } }
      onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
      } }
      onBlur={ editor => {
          console.log( 'Blur.', editor );
          // remove if no data

      } }
      onFocus={ editor => {
          console.log( 'Focus.', editor );
      } }
  />
)
export default Tab;
