import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className="md:max-w-screen-lg mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;