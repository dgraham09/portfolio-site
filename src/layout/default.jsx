import { Outlet } from "react-router-dom";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
const DefaultLayout = () => {
    return (
        <div className="bg-blue-950">
            <header className="bg-blue-950">
                <div class="h-10"></div>
                <div className="intro"></div>
            </header>
            <Cursor/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default DefaultLayout