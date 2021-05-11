import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import GlobalStyle from './GlobalStyle';
import SApp from './SApp';

export default function App() {
  return (
    <SApp>
      <GlobalStyle />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </main>
    </SApp>
  );
}
