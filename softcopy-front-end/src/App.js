import './App.css';
import Navbar from './Components/Navbar';
// import OptionPage from './Components/OptionPage';
import { Route, Switch } from 'react-router-dom'
import Services from './Components/Services'
import Home from './Components/Home';
import Contact from './Components/Contact'
import About from './Components/About'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      {/* <img style={{width:'100%'}} src={main} alt="" /> */}
      {/* <OptionPage /> */}
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
      </Switch>
      <div style={{height:'100vh'}}>
      Body
      </div>
      <Footer />
    </div>
  );
}

export default App;
