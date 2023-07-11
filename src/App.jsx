import Header from './header/header'
import MainBase from './main/mainBase'
import "./index.css"
import CreatContext from "./CreatContex"
import { Route,Routes } from 'react-router-dom'
import MenuPage from './menu/menupage'
// import SignUp from './signup/signup'
import Contact from './contact/contact'
import ABoutUS from './aBoutUs/aboutus'

function App() {
 return(
 <CreatContext>
    <div className="bg-[#E7E0E0] min-h-screen ">
        <Header/>
        <Routes>
            <Route path='/' element={<MainBase/>} />
            <Route path='/menupage' element={<MenuPage/>}/>
            <Route path='/about-us' element={<ABoutUS/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h1>404</h1>}/>
            <Route path='*' element={<h1>slash 404</h1>}>
               <Route path='dashbord' element={<p>salam slash</p>}/>
            </Route>
            {/* <Route path='/signup' element={<SignUp/>}/> */}

        </Routes>
       
    </div>
 </CreatContext>)
}

export default App
