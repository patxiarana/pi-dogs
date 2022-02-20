import './App.css';
import { Route, BrowserRouter,} from 'react-router-dom';
import landingPage from './componentes/Landingpage';
import Home from './componentes/Home';
import DogDetail  from './componentes/DogDetail';
import CrateDogs from './componentes/CreateDogs';
import SearchBar from './componentes/SearchBar';


function App() {


  return (
    <BrowserRouter>   
    <div className="App">
     <landingPage/>
    <Route exact path="/" component={landingPage}/>
    <Route exact path="/Home" component={Home}/>
    <Route exact path="/dogs/:id" component={DogDetail}/>
    <Route exact path="/Home/create" component= {CrateDogs} />
    <Route exact path="dogs/name?" component={SearchBar}/>
    
    
    </div>

    </BrowserRouter>
  );
}

export default App;
