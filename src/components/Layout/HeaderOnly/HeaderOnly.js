import Header from "../components/Header";
function HeaderOnly({children}) {
    return ( 
        <div>
            <h3>Header Only</h3>
            <Header/>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default HeaderOnly;