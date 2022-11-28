import Sidebar from './sidebar';
import '../App.css';
import NavBar from './Navbar';
import SearchButton from './Button';
import DisplayFilters from './DisplayFilters';


function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div> 
          <DisplayFilters />
          <h1>today lets...</h1>
        </div>
        <SearchButton />
        
      </header>
    </div>
  );
}

export default App;
