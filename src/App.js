import { Router, Route, Switch } from 'react-router';
import { useLocation } from 'react-router-dom';
import Screen1 from './Components/Screen1/Screen1';
import Screen2 from './Components/Screen2/Screen2';
import './App.scss';
import 'antd/dist/antd.css';

const createHistory = require('history').createBrowserHistory;
const history = createHistory();

const NoMatch = () => <div>No match</div>

export const LocationDisplay = () => {
  const location = useLocation()

  return <div data-testid="location-display">{location.pathname}</div>
}

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Screen1} />
        <Route path='/game' component={Screen2} />
        <Route>
          <NoMatch />
      </Route>
      </Switch>
      <LocationDisplay />
    </Router>
  );
}

export default App;