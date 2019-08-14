import React, { useState } from 'react';

import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';

const TableComponent = ({text, isEditMode, value}) => {
  return (
    <CKEditor
      editor={ InlineEditor }
      data=""
      config={{
        toolbar: ['insertTable'],
        table: {
          contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
        }
      }}
      onInit={ editor => {
          // You can store the "editor" and use when it is needed.
          editor.editing.view.focus();
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
}

export default TableComponent;
