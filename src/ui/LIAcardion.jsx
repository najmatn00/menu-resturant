const LiAcardion = ({classCss ,children}) => {
   
    return ( <>
            <li className={classCss}>
                {children}
            </li>
    </> );
}
 
export default LiAcardion;