import "./stylesheets/App.css";
import EditPage from "./components/EditPage/EditPage";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {
  const [wordCount, setWordCount] = useState(0);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<EditPage/>} />
          {/* <Route exact path="/home" element={<HomePage/>} /> */}
          {/* <Route exact path="/list" element={<ListPage/>} /> */}
          <Route path="*" element={<p>404 not found</p>} />  
        </Routes>   
      </BrowserRouter>      
    </div>
  );
}

export default App;
