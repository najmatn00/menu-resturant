import Header from './header/header'
import routes from './routes'
import "./index.css"
import CreatContext from "./CreatContex"
import { Route,Routes,useRoutes } from 'react-router-dom'

function App() {


    let router = useRoutes(routes);
 return(
 <CreatContext>
    <div className="bg-[#E7E0E0] min-h-screen ">
        <Header/>
<<<<<<< HEAD
        
            
       {router}
=======
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
>>>>>>> mobile
       
    </div>
 </CreatContext>)
}

export default App
