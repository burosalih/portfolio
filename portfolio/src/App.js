import './App.css';
import Button from './components/button';
import Navbar from './components/navbar';

function App() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <Navbar/>
        <div className="h-screen bg-gray-900  flex flex-col items-center justify-center">
            <h1 className="font-mont font-bold text-white text-6xl select-none">
              Buro Salih
            </h1>
            <p className="font-mont font-semibold text-white text-2xl py-4 select-none">Front-End React Developer</p>
          <Button text="Download CV" onClick={handleClick} />
        </div>
    </div>
  );
}

export default App;