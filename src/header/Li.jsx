const Li = ({children,color}) => {
    console.log(children);
    return ( <>
             <p className={color}>{children}</p>
    </> );
}
 
export default Li;