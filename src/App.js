import tw from "tailwind-styled-components";
import Main from "./components/Main";
import "./index.css"

const Hr = tw.hr`
  border-primaryColor opacity-20
`

function App() {
  return (
    <div className="mx-2">
      <Main />
      <Hr />
    </div>
  );
}

export default App;
