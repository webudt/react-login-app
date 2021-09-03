import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>hello</h1>
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/user" exact={true} component={UserPage} />
      <Route path="/login" exact={true} component={LoginPage} />
    </div>
  );
}

export default App;
