import Header from "../components/Header";
import Sidebar from "./Sidebar";
function DefaultLayout({children}) {
    return ( 
        <div>
            <h3>default Only</h3>

            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">{children}</div>
            </div>
        </div>
     );
}

export default DefaultLayout;