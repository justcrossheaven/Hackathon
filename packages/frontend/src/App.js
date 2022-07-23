import "./stylesheets/App.css";
import HomePage from "./components/HomePage/HomePage";
import EditPage from "./components/EditPage/EditPage";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/edit" element={<EditPage/>} />
          {/* <Route exact path="/list" element={<ListPage/>} /> */}
          <Route path="*" element={<p>404 not found</p>} />  
        </Routes>   
      </BrowserRouter>      
    </div>
  );
}

export default App;
