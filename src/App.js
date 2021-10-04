import './App.css';
import './components/PageWrapper';
import PageWrapper from './components/PageWrapper';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages imports
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Portfolio from './components/Common/Portfolio';
import Services from './components/Common/Services';
import Team from './components/Common/Team';
import Timeline from './components/Common/Timeline';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>

          <Route 
            exact={true}
            path="/"
            component={Home}
          />

          <Route 
            path="/about"
            component={About}
          />

          <Route 
            path="/portfolio"
            component={Portfolio}
          />

          <Route 
            path="/services"
            component={Services}
          />
        
          <Route 
            path="/team"
            component={Team}
          />

          <Route 
            path="/contact"
            component={Contact}
          />

      </PageWrapper>
    </Router>
  );
}

export default App;
