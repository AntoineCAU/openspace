import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DestinationsPage from './components/DestinationsPage';
import ContactPage from './components/ContactPage';
import Planet from './components/Planet';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';

export default function App() {
  const [headerWhite, setHeaderWhite] = useState(true);

  return (
    <SApp>
      <GlobalStyle />
      <main>
        <Switch>
          <Route exact path="/">
            <HomePage setHeaderWhite={setHeaderWhite} />
          </Route>
          <Route exact path="/destinations" component={DestinationsPage} />
          <Route exact path="/contact-us" component={ContactPage} />
          <Route path="/planet/:name" component={Planet} />
        </Switch>
      </main>
      <Header headerWhite={headerWhite} />
      <Footer />
    </SApp>
  );
}
