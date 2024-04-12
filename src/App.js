import "./App.css";
import Counter from "./components/Dropdown";

const menuData = ["Name", "Email", "Age", "Profession"];

function App() {
  return (
    <div className="App">
      <Counter menuData={menuData} />
    </div>
  );
}

export default App;
