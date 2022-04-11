import logo from "./logo.svg";
import "./App.css";
import "./styles/sass/main.scss";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />

      <Products />
      <Footer />
    </div>
  );
}

export default App;
