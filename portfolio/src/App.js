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
        <div className="h-screen bg-gray-500 flex flex-col items-center justify-center">
            <p className="font-mont font-bold text-white text-3xl py-4 select-none">
              Buro Salih Front-end Web Developer
            </p>
          <Button text="Learn more" onClick={handleClick} />
        </div>
    </div>
  );
}

export default App;