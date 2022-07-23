import "./stylesheets/App.css";
import SlateEditor from "./components/SlateEditor/Editor";
import GameCanvas from "./components/GameCanvas/GameCanvas";
import { useState } from "react";
function App() {
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className="App">
      <div className="text-page">
        <SlateEditor setWordCount={setWordCount} />
      </div>
      <div className="test">
        <GameCanvas wordCount={wordCount} />
      </div>
    </div>
  );
}

export default App;
