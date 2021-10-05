import './App.css';
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Capabilities from './components/Capabilities'
import ClientSays from './components/ClientSays'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Capabilities />
        <ClientSays />
        <Contact />
        <Footer />
        <Switch>
          <Route path="#about">
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
