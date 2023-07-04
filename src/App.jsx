import Header from "./ui/header/header"
import './index.css'
import MainBase from "./ui/main/mainBase"
import CreatContext from "./CreatContex"

function App() {
 return(<CreatContext>
 
 <div className="bg-[#E7E0E0] ">
 
 <Header/>
 <MainBase/>
 </div>
 </CreatContext>)
}

export default App
