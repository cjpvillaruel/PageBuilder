import React, { useState } from 'react';
import { Typography } from 'antd';

import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

// import './heading.css';

const { Title } = Typography;

const Heading = ({text, isEditMode, value}) => {
  const [textValue, setValue] = useState(value);
  const [isEditable, setEditMode] = useState(isEditMode)
  console.log(isEditMode)
  console.log(isEditable)
  // if(isEditMode) {
  //   return <input type="text" placeholder="Heading 1" />
  // }
  // // console.log("hi" isEditable)
  // if(value === null || value == undefined){
  //   return <Title style={{ color: 'gray'}}>Sample Text only</Title>
  // }
  return (
    <CKEditor
      editor={ InlineEditor }
      data="<h1>Title</h1>"
      config={{
        toolbar: [ 'heading','bold', 'italic',  ],
        heading: {
          options: [
              { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
              { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
          ]
        }
      }}
      onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          console.log( 'Editor is ready to use!', editor );
          editor.editing.view.focus();
      } }
      onChange={ ( event, editor ) => {
          const data = editor.getData();
          console.log( { event, editor, data } );
      } }
      onBlur={ editor => {
          console.log( 'Blur.', editor );
      } }
      onFocus={ editor => {
          console.log( 'Focus.', editor );
      } }
  />
  )
}

export default Heading;
