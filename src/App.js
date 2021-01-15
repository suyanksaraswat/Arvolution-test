import { Router, Route, Switch } from 'react-router';
import Screen1 from './Components/Screen1';
import Screen2 from './Components/Screen2';
import './App.scss';
import 'antd/dist/antd.css';

const createHistory = require('history').createBrowserHistory;
const history = createHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Screen1} />
        <Route path='/game' component={Screen2} />
      </Switch>
    </Router>
  );
}

export default App;