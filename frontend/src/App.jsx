import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRouter from "./AllRouter";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <Router>
        {/* Nav */}
        <NavBar />

        <AllRouter />
      </Router>
    </>
  );
}

export default App;
