import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyle";

import { Header, Loading, Container, Navigation } from "./components";

const HomeLazy = lazy(() => import("./pages/Home/Home"));
const AboutLazy = lazy(() => import("./pages/About/About"));
const LoginLazy = lazy(() => import("./pages/Login/Login"));

function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Container>
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path="/" component={HomeLazy} />
            <Route exact path="/about" component={AboutLazy} />
            <Route exact path="/login" component={LoginLazy} />
          </Switch>
        </Suspense>
      </Container>
    </Router>
  );
}

export default Routes;
