import MenuPage from './pages/menu/menupage'
import Contact from './pages/contact/contact'
import ABoutUS from './pages/aBoutUs/aboutus'
import ShopCart from './pages/shoppingCard/shoppCart'
import Dashbord from './pages/dashbord/dashbord'
import MainBase from './pages/main/mainBase'
import CheckUserLogin from './utility/checkuserLogin'
import SignInPage from './pages/signup/signinPage'
import DetailProduct from './pages/menu/detailProduct'
import SignUp from './pages/signup/signUp'
import Acounts from './pages/dashbord/Acounts'
import OrderDashbord from './pages/dashbord/OrderDashbord'


let routes = [
    {path:"/",element:<MainBase/>},
    {path:'/menupage',element:<MenuPage/>, children:[
        {path:':id',element:<DetailProduct/>}
    ]},
    {path:"/about-us",element:<ABoutUS/>},
    {path:"/contact",element:<Contact/>},
    // {path:"/*",element:"<h1>404</h1>"},
    {path:"/shoppCart",element:<ShopCart/>},
    {path:"/dashbord",element:<CheckUserLogin><Dashbord/></CheckUserLogin> ,children:[
        {path:"order",element:<OrderDashbord/>},
        {path:"acount",element:<Acounts/>},
    ]},
    {path:"/signIn",element:<SignInPage/>},
    // {path:"/signUp",element:<SignUp/>},
   
   
];
export default routes;