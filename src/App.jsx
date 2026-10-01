import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/HomePage";
import Vehicles from "./pages/Vehicles/Vehicle";
import Company from "./pages/Company/Company";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicles" element={<Vehicles />} />
        {/* Όταν η διεύθυνση είναι /vehicles, εμφάνισε το component Vehicles */}
        <Route path="/Company" element={<Company />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
