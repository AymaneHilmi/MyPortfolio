import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='flex bg-background'>

      {/* <Sidebar /> */}
      <div className='w-full h-full justify-center'>
        <Navbar />
        <HomeScreen />
      </div>
    </div>
  );
}

export default App;
