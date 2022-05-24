import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from "react-redux";
import {store} from './store/store';
import { persistStore } from 'redux-persist';
import { Favorites } from "pages";

const persistor = persistStore(store);

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Favorites" component={Favorites} />
        </Switch>
      </Router>
      </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default AppRouter;
