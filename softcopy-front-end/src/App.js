import './App.css';
import Navbar from './Components/Navbar';
import { Route, Switch } from 'react-router-dom'
import Services from './Containers/Services'
import Home from './Containers/Home';
import Contact from './Containers/Contact'
import About from './Containers/About'
import Footer from './Components/Footer';
import Login from './Containers/Login';
import Signup from './Containers/Signup';
import ReduxToastr from 'react-redux-toastr'
import 'react-redux-toastr/src/styles/index.scss'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
      {/* <div style={{height:'100vh'}}>
      Body
      </div> */}
      <Footer />
      <ReduxToastr 
        newestOnTop={false}
        preventDuplicates
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      />
    </div>
  );
}

export default App;
