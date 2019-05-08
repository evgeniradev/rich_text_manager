import React                      from 'react';
import Editor                     from 'draft-js-plugins-editor';
import createToolbarPlugin        from 'draft-js-static-toolbar-plugin';
import                            'draft-js-static-toolbar-plugin/lib/plugin.css';

const staticToolbarPlugin = createToolbarPlugin();
const plugins = [staticToolbarPlugin];
const { Toolbar } = staticToolbarPlugin;

const RichTextEditor = (props) => (
  <div id='rich-editor' className='editors rich-editor form-control'>
    <Editor
      editorState={props.app.state.editorState}
      onChange={(e) => props.app.setState({editorState: e})}
      plugins={plugins}
    />
    <Toolbar />
  </div>
);

export default RichTextEditor;
