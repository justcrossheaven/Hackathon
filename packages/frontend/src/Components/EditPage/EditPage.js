import "./EditPage.css";
import SlateEditor from "../SlateEditor/Editor";
import GameCanvas from "../GameCanvas/GameCanvas";
import { useState } from "react";
function EditPage() {
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className="edit-page">
      <div className="text-page">
        <SlateEditor setWordCount={setWordCount} />
      </div>
      <div className="test">
        <GameCanvas wordCount={wordCount} />
      </div>
    </div>
  );
}

export default EditPage;
