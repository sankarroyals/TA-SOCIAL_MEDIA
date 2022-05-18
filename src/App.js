
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import MyProfile from './components/MyProfile';
import EditProfile from './components/EditProfile';
import PostItems from './components/Posts/PostItems';


function App() {
  return (
<>
   

  <Router>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/myProfile" element={<MyProfile />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/postItems" element={<PostItems />} />
    </Routes>
  </Router>
</>
  );
}

export default App;
