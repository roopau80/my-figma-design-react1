// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import './index.css';

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-t from-slate-800 to-stone-900'>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;


