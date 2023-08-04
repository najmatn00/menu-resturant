import Header from './header/header'
import routes from './routes'
import "./index.css"
import CreatContext from "./CreatContex"
import { useRoutes } from 'react-router-dom'

function App() {


    let router = useRoutes(routes);
 return(
 <CreatContext>
    <div className="bg-[#E7E0E0] min-h-screen ">
        <Header/>
        
            
       {router}
       
    </div>
 </CreatContext>)
}

export default App
