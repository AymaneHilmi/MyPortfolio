import './App.css';
import HomeScreen from './Screens/HomeScreen';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <body className='flex bg-background'>

      <Sidebar />
      <div className='w-full'>
        <Navbar />
        <HomeScreen />
      </div>



    </body>
  );
}

export default App;
