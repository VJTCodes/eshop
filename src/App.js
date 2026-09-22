
import './App.css';
import Home from './Home';
import Header from './Header';
import Checkout from './Checkout';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className='App'>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<><Header /><Checkout /></>} />
            <Route path="/" element={<><Header /><Home /></>} />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
