import tw from "tailwind-styled-components";
import Main from "./components/Main";
import "./index.css";
import DontWorry from "./components/DontWorry";
import Smart from "./components/Smart";
import Estimate from "./components/Estimate";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Hr = tw.hr`
  border-primaryColor mx-3 sm:mx-20 opacity-20
`;

function App() {
    return (
        <>
            <Header />
            <div className="bg-white text-black space-y-20 ">
                <Main />
                <Hr />
                <DontWorry />
                <Hr />
                <Smart />
                <Estimate />
            </div>
            <Footer />
        </>
    );
}

export default App;
