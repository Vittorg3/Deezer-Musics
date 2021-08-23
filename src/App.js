import './App.css';

import { 
  BrowserRouter, 
  Switch, 
  Route
} from 'react-router-dom';

import MusicPlayerFooter from './components/MusicPlayerFooter';
import Header from './components/Header';
import Menu from './components/Menu';

import HomePage from './pages/Home';
import FavoritePage from './pages/Favorite';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/favorite/">
            <FavoritePage />
          </Route>
        </Switch>
      <MusicPlayerFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
