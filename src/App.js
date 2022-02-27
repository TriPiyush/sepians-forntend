import logo from './logo.svg';
import './App.css';
import Login from './pages/Login'
// import
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import ProtectedRoute from './components/ProtectedRoute';

import Profile from './pages/Profile'
function App() {
  return (
    <Router>
      <Routes>

        <Route exact path="/login" element={<Login/>} />
       
        <Route exact path='/' element={<ProtectedRoute/>}>
            <Route exact path='/profile' element={<Profile/>}/>
          </Route>
      </Routes>
     
    </Router>
  );
}

export default App;
