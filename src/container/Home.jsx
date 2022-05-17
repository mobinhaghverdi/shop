import react from "react";
import Header from "../components/Header";
import MainHome from "../components/MainHome";
import Products from "../components/Products";
import SecMain from "../components/SecMain";


const Home = () => {
    return (
        <>
            <Header />
            {/* <Products /> */}
            <MainHome />
            <SecMain />
        </>
    );
}

export default Home;