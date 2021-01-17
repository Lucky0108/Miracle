// Basic Imports
import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'
import './App.css';
import loadingImg from './img/ball-triangle.svg'

// Components
import Navbar from './Components/Navbar';
import Home from './Containers/Home';
import Footer from './Components/Footer';

// Commented to use later
import Login from './Containers/Login';
// import Signup from './Containers/Signup';


// CSS Imports for packages
import 'react-redux-toastr/src/styles/index.scss'
import '../node_modules/react-modal-video/scss/modal-video.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Action Import
import { isLoggedin } from './actions';
import Rocket from './Components/Rocket';
import WhatsAppIcon from './Components/WhatsappIcon';

// Lazy Load Component
const ErrorPage = lazy(() => import('./Containers/404'));
const Team = lazy(() => import('./Containers/Team'));
const FAQ = lazy(() => import('./Containers/FAQ'));
const Terms = lazy(() => import('./Containers/Terms'));
const Testimonials = lazy(() => import('./Containers/Testimonial'));
const Policy = lazy(() => import('./Containers/Policy'))
const About = lazy(() => import('./Containers/About'));
const Contact = lazy(() => import('./Containers/Contact'));
const Services = lazy(() => import('./Containers/Services'));
// const Blog = lazy(() => import('./Containers/Blog'));
// const BlogPg = lazy(() => import('./Containers/BlogPg'));
const Quote = lazy(() => import('./Containers/Quote'));



function App() {

  const location = useLocation();

  useEffect(() => {
    // Scroll top when location changes
    window.scrollTo(0, 0);
  }, [location]);

  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth)

  useEffect(() => {
    if(!auth.authenticate){
      dispatch(isLoggedin())
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={
        <div className="divLoader">
            <img src={loadingImg} alt="Loading" />
        </div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/admin/login' component={Login} />
        {/* <Route exact path='/admin/signup' component={Signup} /> */}
        <Route exact path='/team' component={Team} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/testimonial" component={Testimonials} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/terms" component={Terms} />
        {/* <Route exact path="/blog" component={Blog} /> */}
        {/* <Route exact path="/blogpg" component={BlogPg} /> */}
        <Route exact path="/quote" component={Quote} />
        <Route component={ErrorPage} />
      </Switch>
      </Suspense>
      <Footer />
      <WhatsAppIcon />
      <Rocket />
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
