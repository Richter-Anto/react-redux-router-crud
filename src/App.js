import { BrowserRouter as Router , Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './home/HomePage';
import CreateUser from './create/CreateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={HomePage} />
          <Route path='/create' Component={CreateUser} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
