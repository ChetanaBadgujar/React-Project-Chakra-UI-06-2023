
import {BrowserRouter as Router, Routes , Route, } from 'react-router-dom';
import Header from './Components/Header.js';
import Home from './Components/Home.js';
import Footer from './Components/Footer.js';
import Videos from './Components/Videos.js';
import Upload from './Components/Upload.js';
import Login from './Components/Login.js';
import SignUp from './Components/SignUp.js';

function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/uploads' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
