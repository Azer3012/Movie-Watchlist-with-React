import './fontawesome/css-fontawesome/all.css'
import './App.css';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './components/Header';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import { GlobalProvider } from './context/GlobalState';
function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={WatchList}/>
          <Route exact path="/watched" component={Watched}/>
          <Route exact path="/add" component={Add}/>
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
