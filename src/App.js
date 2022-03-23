import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
//this is the problem
function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
