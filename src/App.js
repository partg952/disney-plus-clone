import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Main from './components/main'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
          <Login/>
        </Route>
        <Route path='/home' exact>
        <Main/>
        </Route>
      </Router>
    </div>
  );
}
  
export default App;
