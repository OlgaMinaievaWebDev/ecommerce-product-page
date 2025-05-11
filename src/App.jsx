import ProductPage from "./pages/ProductPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="flex flex-col justify-center h-full bg-white w-full px-36">
      <Navbar/>
      <ProductPage/>
    </div>
  );
}

export default App
