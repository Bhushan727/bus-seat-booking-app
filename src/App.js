
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import About from './pages/About';
import Account from './pages/Account';
import Booking from './pages/Booking';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
          <Route index element={<Home />}/>
          <Route path='/booking' element={<Booking />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/account' element={<Account />}/>
          <Route path='/signup' element={<Signup />} />
      </Routes>

    </div>
  );
}

export default App;
