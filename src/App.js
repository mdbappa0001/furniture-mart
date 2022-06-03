
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blogs' element={<Blog></Blog>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
     </Routes>
    </div>
  );
}

export default App;
