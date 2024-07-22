import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Enjoy from './components/Enjoy';
import AboutUs from './components/AboutUs';
import RedCard from './components/RedCard';
import Numbers from './components/Numbers';
import FoodMenu from './components/FoodMenu';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Chefs from './components/Chefs';
import BookTable from './components/BookTable';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div>

      <Router>
        <NavBar />
        <Switch>

          <Route exact path='/'>
            <Enjoy />
          </Route>

          <Router path='/About'>
            <AboutUs />
            <RedCard />
            <Numbers />
          </Router>

          <Router path='/Menu'>
            <FoodMenu />
            <Testimonials />
          </Router>

          <Router path='/Events'>
            <Events />
          </Router>

          <Router path='/Chefs'>
            <Chefs />
            <BookTable />
          </Router>

          <Router path='/Gallery'>
            <Gallery />
          </Router>

          <Router path='/Contact'>
            <Contact />
          </Router>

          <Router path='/Booktable'>
            <BookTable />
          </Router>

        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
