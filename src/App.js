
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import CheckoutProduct from './CheckoutProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
