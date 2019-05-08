import React                          from 'react';
import htmlToDraft                    from 'html-to-draftjs';
import { EditorState, ContentState }  from 'draft-js';

const Import = (props) => (
  <div className='file-import'>
    <p>Import File: </p>
    <input type='file' name='import' onChange={(event) => {importFile(props.app, event)}}/>
  </div>
);

const importFile = (app, event) => {
  const reader = new FileReader();
  const file = event.target.files[0];

  reader.onload = function(e) {
    const content = e.target.result;
    app.setState({ editorState: EditorState.createWithContent(convertContentToHtml(content)) })
    alert('File loaded successfully!')
  };

  if (file.name.split('.').pop() === 'txt') {
    reader.readAsText(file);
  }
  else {
    alert('The file is not a .txt file.')
  }

  event.target.value = null;
}

const convertContentToHtml = (value) => {
  const blocksFromHtml = htmlToDraft(value);
  const { contentBlocks, entityMap } = blocksFromHtml;
  return ContentState.createFromBlockArray(contentBlocks, entityMap);
}

export default Import;
