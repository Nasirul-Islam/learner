import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMain from './component/AboutMain/AboutMain';
import Contacts from './component/Contacts/Contacts';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import ServiceMain from './component/ServiceMain/ServiceMain';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <AboutMain></AboutMain>
          </Route>
          <Route exact path="/services">
            <ServiceMain></ServiceMain>
          </Route>
          <Route exact path="/contacts">
            <Contacts></Contacts>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
