import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import React, { Component } from "react";
import { Editor } from "react-draft-wysiwyg";


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default class TextEditor extends Component {

    state = {
        editorState: EditorState.createEmpty(),
    };

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

  render() {
    const {editorState} = this.state;
    console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    return (
      <div>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
        />
        ;
      </div>
    );
  }
}
