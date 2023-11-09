import tw from "tailwind-styled-components";
import Main from "./components/Main";
import "./index.css"
import DontWorry from "./components/DontWorry";
import Smart from "./components/Smart";
import Estimate from "./components/Estimate";

const Hr = tw.hr`
  border-primaryColor opacity-20 mx-2
`

function App() {
  return (
    <div className="bg-white text-black">
      <Main />
      <Hr />
      <DontWorry />
      <Hr />
      <Smart />
      <Estimate />
    </div>
  );
}

export default App;
