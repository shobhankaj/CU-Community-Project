import Home from "./pages/Home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate
} from "react-router-dom";
import { redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contex/AuthContex";
import Messanger from "./pages/messanger/Messanger";

function App() {
  //const Navigate=useNavigate();
  const { user } = useContext(AuthContext);
  

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={user ? <Home/> : <Register/>} />
          <Route path="/login" element={user ?<Navigate to="/" />:<Login />}/>
          <Route path="/messanger" element={!user ?<Navigate to="/login" />:< Messanger />}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/profile/:username" element={<Profile/>} />
        </Routes>
      </Router>
  );
}

export default App;
