const Button = ({
    children,color,textColor,click,
    classCss=" border p-2 px-4 rounded-3xl bg-[#D41B27]  text-sm dark:border-0  shadow-md dark:shadow-red-600 "
}) => {
    
    return ( <>
    <button onClick={click} className={textColor +classCss +color }>{children}</button>
    </> );
}
 
export default Button;