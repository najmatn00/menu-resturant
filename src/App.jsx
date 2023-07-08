import Header from './header/header'
import MainBase from './main/mainBase'
import "./index.css"
import CreatContext from "./CreatContex"
import { Route,Routes } from 'react-router-dom'
import MenuPage from './menu/menupage'
import SignUp from './signup/signup'

function App() {
 return(
 <CreatContext>
    <div className="bg-[#E7E0E0] ">
        <Header/>
        <Routes>
            <Route path='/' element={<MainBase/>} />
            <Route path='/menupage' element={<MenuPage/>}/>
            <Route path='/about-us' element={<h1>about us</h1>}/>
            <Route path='/contact' element={<h1>contact</h1>}/>
            <Route path='/*' element={<h1>404</h1>}/>
            {/* <Route path='/signup' element={<SignUp/>}/> */}

        </Routes>
       
    </div>
 </CreatContext>)
}

export default App
