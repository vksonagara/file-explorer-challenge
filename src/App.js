import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import SideBar from "./components/SideBar/SideBar";
import MainContent from "./components/MainContent/MainContent";
import "./App.scss";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <SideBar />
        <MainContent />
        <Switch>
          <Route exact path="/">
            <Redirect to="/root" />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
