import DefaultHoc from "./HOC/default.hoc";
import temp from "./components/temp";

function App() {
  return (
    <>
    <DefaultHoc route="/" exact component={temp}/>
   </>
  );
}

export default App;
