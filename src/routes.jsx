import MenuPage from './menu/menupage'
import Contact from './contact/contact'
import ABoutUS from './aBoutUs/aboutus'
import ShopCart from './shoppingCard/shoppCart'
import Dashbord from './dashbord/dashbord'
import MainBase from './main/mainBase'
import CheckUserLogin from './utility/checkuserLogin'
import SignUpPage from './signup/signupPage'
import DetailProduct from './menu/detailProduct'




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
    {path:"/signUp",element:<SignUpPage/>},
];
export default routes;