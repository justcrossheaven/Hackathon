import './stylesheets/App.css';
import SlateEditor from './components/SlateEditor/Editor';
function App() {
  return (
    <div className="App">
      <div className="text-page">
        <SlateEditor/>
      </div>    
      <div className="test">
        <p>placeholder</p>
      </div>     
    </div>
  );
}

export default App;

