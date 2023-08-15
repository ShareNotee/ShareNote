import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const SimpleDraftEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (newEditorState) => {
    const currentContent = newEditorState.getCurrentContent().getPlainText();
    const oldContent = editorState.getCurrentContent().getPlainText();

    if (currentContent !== oldContent && currentContent.includes("/")) {
      alert("Slash detected!");
    }

    setEditorState(newEditorState);
  };

  return (
    <div style={styles.editorContainer}>
      <Editor
        editorState={editorState}
        onChange={handleEditorChange}
        placeholder="Write something..."
      />
    </div>
  );
};

const styles = {
  editorContainer: {
    border: "1px solid #ccc",
    minHeight: "200px",
    padding: "10px",
    borderRadius: "4px",
  },
};

export default SimpleDraftEditor;
