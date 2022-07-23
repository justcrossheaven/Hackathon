import "./stylesheets/App.css";
import SlateEditor from "./components/SlateEditor/Editor";
import GameCanvas from "./components/GameCanvas/GameCanvas";
function App() {
  return (
    <div className="App">
      <div className="text-page">
        <SlateEditor />
      </div>
      <div className="test">
        <GameCanvas />
      </div>
    </div>
  );
}

export default App;
