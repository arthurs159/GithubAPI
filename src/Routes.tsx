import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
      </Route>
      <Route path="/cepsearch">
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
