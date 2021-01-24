import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ScreenerPage from './pages/ScreenerPage/ScreenerPage'
import ToolsPage from './pages/ToolsPage/ToolsPage'
import MentalPage from './pages/MentalPage/MentalPage'
import Navigation from './components/Navigation/Navigation'


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/screener" component={ScreenerPage} />
          <Route exact path="/tools" component={ToolsPage} />
          <Route exact path="/mental" component = {MentalPage} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
