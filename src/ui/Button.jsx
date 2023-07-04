const Button = ({children,color,textColor}) => {
    console.log(textColor)
    return ( <>
    <button className={textColor +" border p-2 px-4 rounded-3xl bg-[#D41B27]  text-sm " +color }>{children}</button>
    </> );
}
 
export default Button;