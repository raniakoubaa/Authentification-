import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import SignUp from './component/SignUp';
import LoginPage from './component/LoginPage';
import Profile from './component/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/profil" element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
