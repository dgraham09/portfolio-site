import Profile from "../components/Profile";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import { Fragment } from "react"; 


const Home = () => {
    return (
        <Fragment>
        <div className="bg-blue-950">
                <Header />
            <Cursor/>
            <Profile />
            <Footer/>
        </div>
        </Fragment>
    )
}

export default Home;