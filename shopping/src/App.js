
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './containers/Header.js'
import ProductListing  from './containers/ProductListing.js';
import  ProductDetails from './containers/ProductDetails.js';
import Cart from './containers/Cart.js';
import CartConfirmation from './containers/CartConfirmation.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} /> {/* Fixed */}
          <Route path="/product/:productId" element={<ProductDetails />} /> {/* Fixed */}
          <Route path="/cart" element={<Cart />} /> {/* Render Cart page here */}
          <Route path="/confirmation" element={<CartConfirmation />} />
          <Route path="*" element={<h2>404 Not Found</h2>} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
