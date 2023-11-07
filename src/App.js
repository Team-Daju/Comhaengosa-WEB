import tw from "tailwind-styled-components";
import Main from "./components/Main";
import "./index.css"
import DontWorry from "./components/DontWorry";

const Hr = tw.hr`
  border-primaryColor opacity-20 mx-2
`

function App() {
  return (
    <div >
      <Main />
      <Hr />
      <DontWorry />
      <Hr />
    </div>
  );
}

export default App;
