import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import {BrowserRouter as Router,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/'>
          <Login/>
        </Route>
      </Router>
    </div>
  );
}
  
export default App;
