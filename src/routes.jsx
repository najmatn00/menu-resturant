import MenuPage from './menu/menupage'
import Contact from './contact/contact'
import ABoutUS from './aBoutUs/aboutus'
import ShopCart from './shoppingCard/shoppCart'
import Dashbord from './dashbord/dashbord'
import MainBase from './main/mainBase'
import CheckUserLogin from './utility/checkuserLogin'
import SignInPage from './signup/signinPage'
import DetailProduct from './menu/detailProduct'
import SignUp from './signup/signUp'
let routes = [
    {path:"/",element:<MainBase/>},
    {path:'/menupage',element:<MenuPage/>, children:[
        {path:':id',element:<DetailProduct/>}
    ]},
    {path:"/about-us",element:<ABoutUS/>},
    {path:"/contact",element:<Contact/>},
    // {path:"/*",element:"<h1>404</h1>"},
    {path:"/shoppCart",element:<ShopCart/>},
    {path:"/dashbord",element:<CheckUserLogin><Dashbord/></CheckUserLogin>},
    {path:"/signIn",element:<SignInPage/>},
    {path:"/signUp",element:<SignUp/>},
   
   
];
export default routes;