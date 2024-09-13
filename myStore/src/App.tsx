import OrderPage from "./Pages/PaymentPage";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import ReturnInfoPage from "./Pages/InformationPages/ReturnInfoPage";
import DeliveryInfoPage from "./Pages/InformationPages/DeliveyInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product" element={<OrderPage />} />
        <Route path="/returnInfo" element={<ReturnInfoPage />} />
        <Route path="/deliveryInfo" element={<DeliveryInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
