import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import FurnitureDetail from './Pages/Furniture/FurnitureDetail';
import Furnitures from './Pages/Furniture/Furnitures';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/furniture' element={<Furnitures></Furnitures>}></Route>

        <Route path='/furniture/:furnitureId' element={
          <RequireAuth>
            <FurnitureDetail></FurnitureDetail>
          </RequireAuth>
        }></Route>

        <Route path='/manage-items' element={
        <RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>
        }></Route>

        <Route path='/add-items' element={
        <RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>
        }></Route>

        <Route path='/my-items' element={
       <RequireAuth>
         <MyItems></MyItems>
       </RequireAuth>
        }></Route>
        
        <Route path='/blogs' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
