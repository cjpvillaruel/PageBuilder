import React, { useState } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const Text = ({text, isEditMode, value}) => {
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
      data="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc</p>"
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

export default Text;
