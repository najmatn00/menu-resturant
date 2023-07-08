const Button = ({children,color,textColor,click}) => {
    console.log(textColor)
    return ( <>
    <button onClick={click} className={textColor +" border p-2 px-4 rounded-3xl bg-[#D41B27]  text-sm  " +color }>{children}</button>
    </> );
}
 
export default Button;