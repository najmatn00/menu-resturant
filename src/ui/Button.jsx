const Button = ({
    children,color,textColor,click,
    classCss=" border p-2 px-4 rounded-3xl bg-[#D41B27]  text-sm "
}) => {
    
    return ( <>
    <button onClick={click} className={textColor +classCss +color }>{children}</button>
    </> );
}
 
export default Button;