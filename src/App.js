import React             from 'react';
import RichTextEditor    from './components/RichTextEditor';
import Export            from './components/Export';
import Import            from './components/Import';
import { EditorState }   from 'draft-js';
import                   './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { editorState: EditorState.createEmpty() };
  }

  render () {
    return(
      <div className='container'>
        <Import app={this} />
        <Export app={this} />
        <RichTextEditor app={this} />
      </div>
    )
  }
}

export default App;
