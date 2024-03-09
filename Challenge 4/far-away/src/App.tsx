import Form from "./Components/Form/Form";
import Logo from "./Components/Logo/Logo";
import PackageList from "./Components/PackageList/PackageList";
import Stats from "./Components/Stats/Stats";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Logo/>
      <Form/>
      <PackageList/>
      <Stats/>
    </div>
  );
}

export default App;



