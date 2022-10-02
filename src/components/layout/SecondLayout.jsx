
import {Link} from "react-router-dom";
import "./SecondLayout.style.scss"
import {Outlet} from "react-router";

const SecondLayout = ()=>{

    return(
        <div>
            <div className={"GreenBox"}>
                <Link to={"/"} className={"Link"}>فروشگاه</Link>
            </div>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}


export default SecondLayout;