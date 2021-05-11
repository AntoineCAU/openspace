import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
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
        </Switch>
      </main>
      <Footer />
    </SApp>
  );
}
