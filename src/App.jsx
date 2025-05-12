import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext"
function App() {
  return (
    <CartProvider>
      <div className="flex flex-col justify-center h-full bg-white w-full px-36">
        <Navbar />
        <ProductPage />
      </div>
    </CartProvider>
  );
}

export default App
