import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Pricing from "./pages/pricing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pricing" exact element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
