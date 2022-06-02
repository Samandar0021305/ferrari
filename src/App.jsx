import { Switch, Route } from "react-router-dom";

import Auto  from "./pages/auto/Auto";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Auto} exact />
      </Switch>
    </div>
  );
}

export default App;
