import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import ScreenerPage from './pages/ScreenerPage/ScreenerPage'
import ToolsPage from './pages/ToolsPage/ToolsPage'


function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/screener" component={ScreenerPage} />
          <Route exact path="/tools" component={ToolsPage} />
          <Route path="/" render={() => <div>404</div>} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
