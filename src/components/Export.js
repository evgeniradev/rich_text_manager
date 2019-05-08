import React             from 'react';
import draftToHtml       from 'draftjs-to-html'
import { convertToRaw }  from 'draft-js';

const Export = (props) => (
  <a href={textAsBase64(props.app)} download='rich_text.txt'>Download File</a>
);

const textAsBase64 = (app) => {
  const text = draftToHtml(convertToRaw(app.state.editorState.getCurrentContent()))
  return 'data:application/octet-stream;charset=utf-8;base64,' + btoa(text)
}

export default Export;
