import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route exact path="/screener" component={} />
          <Route exact path="/tools" component={} />
          <Route exact path="/brotherhood" component={} />
          <Route exact path="/service" component={} /> */}
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
