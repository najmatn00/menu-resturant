const LiAcardion = ({classCss ,children}) => {
    console.log(children);
    return ( <>
            <li className={classCss}>
                {children}
            </li>
    </> );
}
 
export default LiAcardion;