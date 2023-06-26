
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Register from './Components/Register';
import Login from './Components/Login';
import User2 from './Components/User2';
import User from './Components/User';
import Update from './Components/Update';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>

    <Route path='/header' exact element={<Header/>}/>
    <Route path='/body' exact element={<Body/>}/>
    <Route path='/footer' exact element={<Footer/>}/>
    <Route path='/Register' exact element={<Register/>}/>
    <Route path='/Login' exact element={<Login/>}/>
    <Route path='/user2' exact element={<User2/>}/>
    <Route path='/user' exact element={<User/>}/>
    <Route path='/updateuser/:id' exact element={<Update/>}/>

    </Routes>
    </BrowserRouter>
     <Header id="2" name="prashant" title="passing props"/>
    <Body/>
    <Footer/> 
   
    </>
      
  );
}

export default App;
