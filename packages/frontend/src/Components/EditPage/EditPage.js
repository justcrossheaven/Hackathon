import "./EditPage.css";
import SlateEditor from "../SlateEditor/Editor";
import GameCanvas from "../GameCanvas/GameCanvas";
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation, useNavigate } from "react-router-dom";
function EditPage() {
  const [wordCount, setWordCount] = useState(0);
  let navigate = useNavigate();
  const { state } = useLocation();
//   const { title, document } = state;
  let editorContent = [
    {
      type: "paragaph",
      children: [{ text: "First line of text in Slate JS. " }],
    },
  ];

  const goBack = () => {
    navigate(`/list`);
  };

  return (
    <div className="edit-page">
      <div className="text-page">
        <div className="title">
            <div className="back-icon"><ArrowBackIcon fontSize="large" onClick={goBack}/></div>
            <h1>Title</h1>
        </div>
        <div className="editor-box">
            {/* <SlateEditor setWordCount={setWordCount} /> */}
            <SlateEditor setWordCount={setWordCount} editorContent={editorContent}/>
        </div>
      </div>
      <div className="test">
        <GameCanvas wordCount={wordCount} />
      </div>
    </div>
  );
}

export default EditPage;
