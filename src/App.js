import tw from "tailwind-styled-components";
import Main from "./components/Main";
import "./index.css";
import DontWorry from "./components/DontWorry";
import Smart from "./components/Smart";
import Estimate from "./components/Estimate";
import Header from "./components/Header";

const Hr = tw.hr`
  border-primaryColor opacity-20 mx-2
`;

function App() {
    return (
        <>
            <Header />
            <div className="bg-white text-black">
                <Main />
                <Hr />
                <DontWorry />
                <Hr />
                <Smart />
                <Estimate />
            </div>
        </>
    );
}

export default App;
