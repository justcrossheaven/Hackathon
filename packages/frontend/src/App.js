import "./stylesheets/App.css";
import HomePage from "./components/HomePage/HomePage";
import EditPage from "./components/EditPage/EditPage";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { signInWithGoogle, registerWithEmailAndPassword, signInWithEmail } from './Firebase'; 
import { userContext } from './userContext';

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");

  return (
      <userContext.Provider value={{ userId, setUserId }}>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/edit" element={<EditPage/>} />
          {/* <Route exact path="/list" element={<ListPage/>} /> */}
          <Route exact path="/list" element={<p>list page</p>} />
          <Route path="*" element={<p>404 not found</p>} />  
        </Routes>   
      </BrowserRouter>      
      <button onClick={signInWithGoogle} className="login-with-google-btn">
            Sign In With Google
          </button>
    </div>
    
    </userContext.Provider>

  );
}

export default App;
