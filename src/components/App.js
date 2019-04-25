import React from "react";
import routes from "../routes/routes.js";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import NoMatch from "./NoMatch/NoMatch";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {routes.map(({ path, exact, component: C, ...rest }) => (
            <Route
              key={path}
              path={path}
              exact={exact}
              render={props => <C {...props} 
              {...rest}
              data={this.props.data} />}
            />
          ))}
          <Route render={props => <NoMatch {...props} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
