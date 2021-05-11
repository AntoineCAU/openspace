import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import DestinationsPage from './components/DestinationsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import Planet from './components/Planet';
import Header from './components/Header';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';

export default function App() {
  return (
    <SApp>
      <GlobalStyle />
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/destinations" component={DestinationsPage} />
          <Route exact path="/experience" component={ExperiencePage} />
          <Route exact path="/contact-us" component={ContactPage} />
          <Route path="/planet/:name" component={Planet} />
        </Switch>
      </main>
      <Footer />
    </SApp>
  );
}
