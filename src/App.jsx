import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DestinationsPage from './components/DestinationsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';
import BestRatedPlanets from './components/BestRatedPlanets';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';

export default function App() {
  const [headerWhite, setHeaderWhite] = useState(true);

  return (
    <SApp>
      <GlobalStyle />
      <Header headerWhite={headerWhite} />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage setHeaderWhite={setHeaderWhite} />
          </Route>
          <Route exact path="/destinations" component={DestinationsPage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/contact-us" component={ContactPage} />
        </Switch>
        <BestRatedPlanets />
      </main>
      <Footer />
    </SApp>
  );
}
